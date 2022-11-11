const Token = function (this: any, type: string, value: string) {
  this.type = type;
  this.value = value;
};

function isComma(ch: string) {
  return /,/.test(ch);
}

function isDigit(ch: string) {
  return /\d/.test(ch);
}

function isOperator(ch: string) {
  return /\+|-|\*|\/|%/.test(ch);
}

function isLeftParenthesis(ch: string) {
  return /\(/.test(ch);
}

function isRightParenthesis(ch: string) {
  return /\)/.test(ch);
}

export function tokenize(str: string) {
  str.replace(/\s+/g, "");
  const str_arr = str.split("");

  var result: any[] = [];
  var letterBuffer: any[] = [];
  var numberBuffer: any[] = [];

  str_arr.forEach(function (char: string, i: number) {
    if (isDigit(char)) {
      numberBuffer.push(char);
    } else if (char === ".") {
      numberBuffer.push(char);
    } else if (isOperator(char)) {
      emptyNumberBufferAsLiteral();
      emptyLetterBufferAsVariables();
      if (i === 0 || isLeftParenthesis(str_arr[i - 1]))
        result.push(new (Token as any)("Literal", "0"));
      result.push(new (Token as any)("Operator", char));
    } else if (isLeftParenthesis(char)) {
      if (letterBuffer.length) {
        result.push(new (Token as any)("Function", letterBuffer.join("")));
        letterBuffer = [];
      } else if (numberBuffer.length) {
        emptyNumberBufferAsLiteral();
        result.push(new (Token as any)("Operator", "*"));
      }
      result.push(new (Token as any)("Left Parenthesis", char));
    } else if (isRightParenthesis(char)) {
      emptyLetterBufferAsVariables();
      emptyNumberBufferAsLiteral();
      result.push(new (Token as any)("Right Parenthesis", char));
    } else if (isComma(char)) {
      emptyNumberBufferAsLiteral();
      emptyLetterBufferAsVariables();
      result.push(new (Token as any)("Function Argument Separator", char));
    }
  });

  if (numberBuffer.length) {
    emptyNumberBufferAsLiteral();
  }

  if (letterBuffer.length) {
    emptyLetterBufferAsVariables();
  }

  return result;

  function emptyLetterBufferAsVariables() {
    var l = letterBuffer.length;
    for (var i = 0; i < l; i++) {
      result.push(new (Token as any)("Variable", letterBuffer[i]));
      if (i < l - 1) {
        result.push(new (Token as any)("Operator", "*"));
      }
    }
    letterBuffer = [];
  }

  function emptyNumberBufferAsLiteral() {
    if (numberBuffer.length) {
      result.push(new (Token as any)("Literal", numberBuffer.join("")));
      numberBuffer = [];
    }
  }
}
