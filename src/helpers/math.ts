export const math = (str: string) => {
  const reg_alph = /[a-zа-я]]/gi;
  const reg_numb = /[0-9]]/g;
  const reg_symb = /×+-÷/g;
  const reg_symb_full = /×+-÷^%√/g;

  if (reg_alph.test(str)) return "err";
  let arr_str = str.replace(" ", "").replace(",", ".").split(reg_symb_full);

  for (let i = 0; i < arr_str.length; i++) {
    const s = arr_str[i];
    if (s === "√") {
      if (reg_numb.test(arr_str[i + 1])) arr_str[i] = root(arr_str[i + 1]);
      else return "err";
      arr_str = arr_str.splice(i + 1, 1);
    } else if (s === "^") {
      if (reg_numb.test(arr_str[i + 1]) && reg_numb.test(arr_str[i - 1]))
        arr_str[i] = degree(arr_str[i - 1], arr_str[i + 1]);
      else return "err";
      arr_str = arr_str.splice(i + 1, 1).splice(i - 1, 1);
    }
  }

  for (let i = 1; i < arr_str.length; i += 2) {
    switch (arr_str[i]) {
      case "+":
        if (reg_numb.test(arr_str[i + 1]) && reg_numb.test(arr_str[i - 1]))
          return sum(arr_str[i - 1], arr_str[i + 1]);
        return "err";
      case "-":
        if (reg_numb.test(arr_str[i + 1]) && reg_numb.test(arr_str[i - 1]))
          return min(arr_str[i - 1], arr_str[i + 1]);
        return "err";
      case "÷":
        if (reg_numb.test(arr_str[i + 1]) && reg_numb.test(arr_str[i - 1]))
          return del(arr_str[i - 1], arr_str[i + 1]);
        return "err";
      case "×":
        if (reg_numb.test(arr_str[i + 1]) && reg_numb.test(arr_str[i - 1]))
          return mult(arr_str[i - 1], arr_str[i + 1]);
        return "err";
      case "%":
        if (reg_numb.test(arr_str[i + 1]) && reg_numb.test(arr_str[i - 1]))
          return remainder(arr_str[i - 1], arr_str[i + 1]);
        return "err";
      default:
        return "err";
    }
  }
};

const sum = (a: string, b: string) => {
  return parseFloat(a) + parseFloat(b);
};
const min = (a: string, b: string) => {
  return parseFloat(a) - parseFloat(b);
};
const del = (a: string, b: string) => {
  if (b === "0") return "err";
  return (parseFloat(a) / parseFloat(b)).toFixed(3);
};
const mult = (a: string, b: string) => {
  return parseFloat(a) * parseFloat(b);
};
const remainder = (a: string, b: string) => {
  return parseFloat(a) % parseFloat(b);
};
const degree = (a: string, b: string) => {
  return String(Math.pow(parseFloat(a), parseFloat(b)));
};
const root = (a: string) => {
  return String(Math.sqrt(parseFloat(a)));
};
