import React, { useEffect } from 'react';

const Lotto = () => {
  let numbers = [];
  const numberGenerator = () => {
    return Math.floor(Math.random() * 44 + 1);
  };
  for (let i = 0; i < 6; i++) {
    let number = numberGenerator();
    while (numbers.indexOf(number) !== -1) {
      number = numberGenerator();
    }
    numbers.push(number);
  }
  numbers.sort((a, b) => a - b);
  console.log(numbers);

  return (
    <>
      {numbers.map((num) => (
        <h1>{num}</h1>
      ))}
    </>
  );
};

export default Lotto;
