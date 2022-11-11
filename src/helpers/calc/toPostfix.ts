function seek(stack: any[]) {
  return stack[stack.length - 1];
}
const ops: any = {
  "+": 1,
  "-": 1,
  "/": 2,
  "*": 2,
  "%": 3,
};

export const toPostfix = (mathE: any[]) => {
  let stack: any[] = [];
  let out = "";
  for (var c of mathE) {
    const el = c.value;
    if (!isNaN(el)) {
      out += el + " ";
      continue;
    }
    if (el in ops) {
      while (ops[seek(stack)] >= ops[el]) {
        out += stack.pop() + " ";
      }
      stack.push(el);
      continue;
    }
    if (el === ")") {
      while (stack.length && seek(stack) !== "(") {
        out += stack.pop() + " ";
      }
      stack.pop();
      continue;
    }
    stack.push(el);
  }
  while (stack.length) {
    out += stack.pop() + " ";
  }
  return out;
};
