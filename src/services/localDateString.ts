type optionProp = { [prop: string]: "2-digit" | "numeric" | undefined };

const defaultOptions: optionProp = {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
};

export default (date: Date, options?: optionProp) =>
  Intl.DateTimeFormat("pt-BR", options || defaultOptions).format(date);
