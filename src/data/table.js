const table = [];

for (let n = 2; n <= 20; n++) {
  const values = [];

  for (let i = 1; i <= 10; i++) {
    values.push(`${n} × ${i} = ${n * i}`);
  }

  table.push({
    id: n - 1,
    number: n,
    table: values,
  });
}

export default table;