import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import Request from "../../services/Request";

import {
  TransactionBackend,
  TransactionCard as TransactionCardProps,
} from "../../types/index";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  Username,
  PowerButton,
  HighlightCards,
  Transactions,
  Title,
  LogoutButton,
} from "./styles";

export function Dashboard() {
  const [transactions, setTransactions] = useState<TransactionCardProps[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      try {
        const { data }: { data: { transactions: TransactionBackend[] } } =
          await Request.get("transaction");

        const parsedTransactions: TransactionCardProps[] =
          data.transactions.map((item) => ({
            ...item,
            date: new Date(item.date),
            createdAt: new Date(item.createdAt),
          }));

        setTransactions([...parsedTransactions]);
      } catch (error) {}
    }

    loadTransactions();
  }, []);

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/60112997?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <Username>Matheus</Username>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <PowerButton />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <FlatList
          data={transactions}
          keyExtractor={(item: TransactionCardProps) => item.id}
          renderItem={({ item }: { item: TransactionCardProps }) => (
            <TransactionCard data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 3,
          }}
        />
      </Transactions>
    </Container>
  );
}
