export const mockData = (count: number) => {
  const data: Array<{
    id: number;
    salary: number;
  }> = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      salary: Math.floor(Math.random() * 100000),
    });
  }
  return data;
};
