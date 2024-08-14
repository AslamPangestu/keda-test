export const sortArray = (values = []) => {
  const arr = [...values];
  const length = values.length;

  for (let i = 1; i < length; i++) {
    let j = i;
    while (j > 0 && arr[j] > arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
};

export const sumArray = (values = [], target = 0) => {
  const arr = [...values];
  const length = values.length;
  if (target > length) {
    throw Error("target is greater than array length");
  }

  arr.sort((a, b) => b - a);
  return arr.slice(0, target).reduce((a, b) => a + b, 0);
};

export const sumEvenNested = (value = {}) => {
  const values = Object.values(value);

  return values.reduce((prev, current) => {
    if (typeof current === "object") {
      prev += sumEvenNested(current);
    } else if (typeof current === "number" && current % 2 === 0) {
      prev += current;
    }
    return prev;
  }, 0);
};
