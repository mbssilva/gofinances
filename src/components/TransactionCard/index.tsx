import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

import { categories } from "../../utils/categories";

import { TransactionCard as TransactionCardProps } from "../../types";
import localDateString from "../../services/localDateString";

export function TransactionCard({ data }: { data: TransactionCardProps }) {
  const [category] = categories[
    data.type === "positive" ? "revenue" : "expense"
  ].filter((item) => item.key === data.category);

  return (
    <Container>
      <Title>{data.description}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{localDateString(data.date)}</Date>
      </Footer>
    </Container>
  );
}
