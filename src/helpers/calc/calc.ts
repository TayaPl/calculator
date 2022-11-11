import { tokenize } from "./token";
import { toPostfix } from "./toPostfix";
export const calc = (mathExp: string) => {
  const mathEls = tokenize(mathExp.replace(/÷/, "/").replace(/×/, "*"));
  const mathPostfix = toPostfix(mathEls);
  console.log(mathPostfix);

  let expr = mathPostfix.split(" ");
  console.log(expr);
  let stack: any[] = [];
  for (let i = 0; i < expr.length; i++) {
    if (expr[i].length > 0) {
      if (!isNaN(Number(expr[i])) && isFinite(Number(expr[i]))) {
        stack.push(expr[i]);
      } else {
        let a = stack.pop();
        let b = stack.pop();
        if (expr[i] === "+") {
          stack.push(parseFloat(a) + parseFloat(b));
        } else if (expr[i] === "-") {
          stack.push(parseFloat(b) - parseFloat(a));
        } else if (expr[i] === "*") {
          stack.push(parseFloat(a) * parseFloat(b));
        } else if (expr[i] === "/") {
          if (String(parseFloat(b) / parseFloat(a)).length > 10)
            stack.push((parseFloat(b) / parseFloat(a)).toFixed(7));
          else stack.push(parseFloat(b) / parseFloat(a));
        } else if (expr[i] === "%") {
          stack.push(parseFloat(b) % parseFloat(a));
        }
      }
    }
  }
  console.log(stack);
  if (stack.length > 1) {
    return "ERROR";
  } else {
    return stack[0];
  }
};
