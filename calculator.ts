export function add(numbers: string): number {
  if (numbers === "") return 0;

  const numArray = numbers.split(","); // Split the string by commas
  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}
