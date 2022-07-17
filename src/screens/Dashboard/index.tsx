import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import Request from "../../utils/Request";

import {
  TransactionCardProps,
  Revenue,
  Expense,
  RevenueBackend,
  ExpenseBackend,
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

interface TransactionsListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<TransactionsListProps[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      try {
        const { data: revenueData }: { data: { revenues: RevenueBackend[] } } =
          await Request.get("revenue");
        const { data: expenseData }: { data: { expenses: ExpenseBackend[] } } =
          await Request.get("expense");

        const { revenues } = revenueData;
        const { expenses } = expenseData;

        const parsedRevenues: Revenue[] = revenues.map((item) => ({
          id: item.id,
          user: item.user,
          date: new Date(item.date),
          category: item.category,
          title: item.title,
          subtitle: item.subtitle,
          description: item.description,
          value: item.value,
          label: item.label,
          createdAt: new Date(item.createdAt),
          recurrence: item.recurrence,
        }));
        const parsedExpenses: Expense[] = expenses.map((item) => ({
          id: item.id,
          user: item.user,
          date: new Date(item.date),
          category: item.category,
          title: item.title,
          subtitle: item.subtitle,
          description: item.description,
          value: item.value,
          label: item.label,
          createdAt: new Date(item.createdAt),
        }));

        const formatedRevenues: TransactionsListProps[] = parsedRevenues.map(
          (item) => ({
            ...item,
            amount: item.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }),
            date: item.date.toLocaleDateString("pt-BR"),
            type: "positive",
          })
        );
        const formatedExpenses: TransactionsListProps[] = parsedExpenses.map(
          (item) => ({
            ...item,
            amount: item.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }),
            date: item.date.toLocaleDateString("pt-BR"),
            type: "negative",
          })
        );

        setTransactions([...formatedRevenues, ...formatedExpenses]);
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
          keyExtractor={(item: TransactionsListProps) => item.id}
          renderItem={({ item }: { item: TransactionsListProps }) => (
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
