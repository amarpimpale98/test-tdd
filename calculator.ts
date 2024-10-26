export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiter is comma or newline

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEnd);
    delimiter = new RegExp(
      customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    ); // Escape special characters
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const numArray = numbers.split(delimiter);
  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}
