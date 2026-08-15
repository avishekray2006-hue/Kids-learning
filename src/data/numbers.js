function numberToWord(n) {
  const ones = [
    "", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];

  const tens = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  if (n < 20) return ones[n];

  if (n < 100) {
    return tens[Math.floor(n / 10)] +
      (n % 10 ? " " + ones[n % 10] : "");
  }

  if (n === 100) return "One Hundred";
}

const numbers = [];

for (let i = 1; i <= 100; i++) {
  numbers.push({
    id: i,
    number: i,
    word: numberToWord(i),
  });
}

export default numbers;