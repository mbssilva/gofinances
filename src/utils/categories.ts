import { Category } from "../types";

// export const categories = [
//   { key: "purchases", name: "Compras", icon: "shopping-bag", color: "#5636D3" },
//   { key: "food", name: "Alimentação", icon: "coffee", color: "#FF872C" },
//   { key: "salary", name: "Salário", icon: "dollar-sign", color: "#12A454" },
//   { key: "car", name: "Carro", icon: "crosshair", color: "#E83F5B" },
//   { key: "leisure", name: "Lazer", icon: "heart", color: "#26195C" },
//   { key: "studies", name: "Estudos", icon: "book", color: "#9C001A" },
// ];

// Categorias incompletas - icon e color
export const categories: { revenue: Category[], expense: Category[] } = {
  revenue: [
    { key: "gerais", name: "Gerais", icon: "dollar-sign", color: "red" },
    {
      key: "naoRecorrentes",
      name: "Não recorrentes",
      icon: "dollar-sign",
      color: "red",
    },
    {
      key: "cuponsDeTitulos",
      name: "Cupons de títulos de crédito",
      icon: "dollar-sign",
      color: "red",
    },
    {
      key: "proventosDeFundos",
      name: "Proventos de fundos",
      icon: "dollar-sign",
      color: "red",
    },
    {
      key: "dividendos",
      name: "Dividendos",
      icon: "dollar-sign",
      color: "red",
    },
    {
      key: "jurosSobreCapitalProprio",
      name: "Juros sobre capital próprio",
      icon: "dollar-sign",
      color: "red",
    },
    {
      key: "amortizacoes",
      name: "Amortizações",
      icon: "dollar-sign",
      color: "red",
    },
    { key: "alugeis", name: "Alugueis", icon: "dollar-sign", color: "red" },
  ],
  expense: [
    { key: "habitacao", name: "Habitação", icon: "dollar-sign", color: "red" },
    {
      key: "alimentacao",
      name: "Alimentação",
      icon: "dollar-sign",
      color: "red",
    },
    { key: "saude", name: "Saúde", icon: "dollar-sign", color: "red" },
    {
      key: "transporte",
      name: "Transporte",
      icon: "dollar-sign",
      color: "red",
    },
    { key: "lazer", name: "Lazer", icon: "dollar-sign", color: "red" },
    {
      key: "despesasPessoas",
      name: "Despesas pessoais",
      icon: "dollar-sign",
      color: "red",
    },
    { key: "educacao", name: "Educação", icon: "dollar-sign", color: "red" },
  ],
};
