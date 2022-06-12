import React, { useEffect } from "react";
import { FlatList } from "react-native";

import { Button } from "../../components/Form/Button";

import { Category as CategoryTypes } from "../../types/index";

import {
  Container,
  Header,
  Title,
  CategoryItem,
  Icon,
  Name,
  Separator,
  Footer,
} from "./styles";

interface Props {
  fields?: CategoryTypes[];
  category: CategoryTypes;
  setCategory: (category: CategoryTypes) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  fields,
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleSetCategorySelect(item: CategoryTypes) {
    setCategory(item);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={fields}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CategoryItem
            onPress={() => {
              handleSetCategorySelect(item);
            }}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}
