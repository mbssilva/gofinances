import React from 'react';
import { FlatList, VirtualizedList } from 'react-native';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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
  LogoutButton
} from './styles';

interface TransactionsListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const transactionList: TransactionsListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '13/04/2020'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '10/04/2020'
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'home',
      },
      date: '27/03/2020'
    }
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{
              uri: 'https://avatars.githubusercontent.com/u/60112997?v=4'
            }} />

            <User>
              <UserGreeting>Olá, </UserGreeting>
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
          data={transactionList}
          keyExtractor={(item: TransactionsListProps) => item.id}
          renderItem={
            ({ item }: { item: TransactionsListProps }) => <TransactionCard data={item} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 3
          }}
        />

      </Transactions>
    </Container>
  );
}
