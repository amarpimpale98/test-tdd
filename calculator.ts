export function add(numbers: string): number {
  if (numbers === "") return 0;

  const delimiter = /,|\n/; // Handle commas and newlines as delimiters
  const numArray = numbers.split(delimiter);
  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}
