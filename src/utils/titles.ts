import { Category } from "../types";

// Títulos incompletas - icon e color
export const titles: { [key: string]: Category[] } = {
  gerais: [
    { key: "salario", name: "Salário/Pro-labore", icon: "dollar-sign", color: "red" },
    { key: "valeAlimentacao", name: "Vale-alimentação", icon: "dollar-sign", color: "red" },
    { key: "valeRefeicao", name: "Vale-refeição", icon: "dollar-sign", color: "red" },
    { key: "valeTransporte", name: "Vale-transporte", icon: "dollar-sign", color: "red" },
  ],
  naoRecorrentes: [
    { key: "valeTransporte", name: "Vale-transporte", icon: "dollar-sign", color: "red" },
  ],
  cuponsDeTitulos: [],
  proventosDeFundos: [],
  dividendos: [],
  jurosSobreCapitalProprio: [],
  amortizacoes: [],
  alugeis: [],
  habitacao: [],
  alimentacao: [],
  saude: [],
  transporte: [],
  lazer: [],
  despesasPessoas: [],
  educacao: [],
};

const revenue = {
  fixed: {
    titles: [
      "Salário/Pro-labore",
      "Vale alimentação",
      "Vale refeição",
      "Vale transporte",
    ],
  },
  variable: {
    categories: {
      Gerais: [
        "13º Salário",
        "Adicional de Férias",
        "Presentes",
        "PLR",
        "Bônus e Gratificações",
        "Outros",
      ],
      "Cupons de títulos de crédito": [],
      "Proventos de fundos": [],
      Dividendos: [],
      "Juros sobre capital próprio": [],
      Amortizações: [],
      Alugueis: [],
    },
  },
};