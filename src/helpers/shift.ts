export const shift = (arr: Array<{ id: string; mathexp: string; }>, str:string) => {
    for (let i = arr.length-1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = {id: String(Date.now()), mathexp: str};
    return arr;
};