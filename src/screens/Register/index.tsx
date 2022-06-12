import React, { useEffect, useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { ControlledInput } from "../../components/Form/ControlledInput";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import { CategorySelect } from "../../screens/CategorySelect";

import Request from "../../utils/Request";
import { categories } from "../../utils/categories";
import { titles } from "../../utils/titles";

import {
  Container,
  ScrollableWrapper,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

interface FormData {
  description: string;
  value: string;
}

const registerFormSchema = Yup.object().shape({
  description: Yup.string().required("Nome é obrigatório."),
  value: Yup.number()
    .typeError("Informe um valor numérico.")
    .positive("O valor não pode ser negativo.")
    .required("Preço é obrigatório."),
});

export function Register() {
  const categoryTitleDefault = {
    key: "category",
    name: "Categoria",
  };
  const [transactionType, setTransactionType] = useState<"" | "up" | "down">(
    ""
  );
  const [titleModalVisible, setTitleModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [category, setCategory] = useState({ ...categoryTitleDefault });
  const [title, setTitle] = useState({ ...categoryTitleDefault });
  const [registerReady, setRegisterReady] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setRegisterReady(
      !!transactionType &&
        category.key !== "category" &&
        title.key !== "category"
    );
  }, [transactionType, category, title]);

  const {
    control,
    handleSubmit,
    reset: formInputsReset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  function handleTransactionTypeSelect(type: "up" | "down") {
    if (type !== transactionType) {
      setTitle(categoryTitleDefault);
      setCategory(categoryTitleDefault);
    }
    setTransactionType(type);
  }

  function handleShowSelectCategoryModal(visible: boolean) {
    setCategoryModalVisible(visible);
  }

  function handleShowSelectTitleModal(visible: boolean) {
    setTitleModalVisible(visible);
  }

  async function handleRegister(form: Partial<FormData>) {
    if (!registerReady) return;

    const data = {
      transactionType,
      date: new Date().setHours(new Date().getHours() - 2),
      description: form.description,
      value: form.value,
      category: category.key,
      title: title.key,
    };

    try {
      if (transactionType === "up") {
        Request.post("revenue", data);
      } else {
        Request.post("expense", data);
      }

      formInputsReset();
      setTransactionType("");
      setTitle(categoryTitleDefault);
      setCategory(categoryTitleDefault);

      navigation.navigate("Listagem");
    } catch (error) {
      Alert.alert("Não foi possível enviar.");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ScrollableWrapper>
          <Header>
            <Title>Cadastro</Title>
          </Header>

          <Form>
            <Fields>
              <ControlledInput
                name="description"
                control={control}
                placeholder="Nome"
                autoCapitalize="words"
                autoCorrect={false}
                error={errors.description && errors.description.message}
              />
              <ControlledInput
                name="value"
                control={control}
                placeholder="Preço"
                keyboardType="numeric"
                error={errors.value && errors.value.message}
              />

              <TransactionTypes>
                <TransactionTypeButton
                  type="up"
                  title="Income"
                  isActive={transactionType === "up"}
                  onPress={() => handleTransactionTypeSelect("up")}
                />
                <TransactionTypeButton
                  type="down"
                  title="Outcome"
                  isActive={transactionType === "down"}
                  onPress={() => handleTransactionTypeSelect("down")}
                />
              </TransactionTypes>

              {transactionType !== "" && (
                <CategorySelectButton
                  title={category.name}
                  onPress={() => handleShowSelectCategoryModal(true)}
                />
              )}
              {category.key !== "category" && (
                <CategorySelectButton
                  title={title.name}
                  onPress={() => handleShowSelectTitleModal(true)}
                />
              )}
            </Fields>

            <Button
              activeOpacity={registerReady ? 0.2 : 1}
              title={
                registerReady ? "Enviar" : "Para enviar, preencha o cadastro"
              }
              onPress={handleSubmit(handleRegister)}
            />
          </Form>

          <Modal visible={categoryModalVisible}>
            <CategorySelect
              fields={
                transactionType === "up"
                  ? categories.revenue
                  : categories.expense
              }
              category={category}
              setCategory={setCategory}
              closeSelectCategory={() => handleShowSelectCategoryModal(false)}
            />
          </Modal>

          <Modal visible={titleModalVisible}>
            <CategorySelect
              fields={titles[category.key]}
              category={title}
              setCategory={setTitle}
              closeSelectCategory={() => handleShowSelectTitleModal(false)}
            />
          </Modal>
        </ScrollableWrapper>
      </Container>
    </TouchableWithoutFeedback>
  );
}
