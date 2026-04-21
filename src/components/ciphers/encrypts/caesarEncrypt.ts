export function caesarEncrypt(text: string, key: number): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      const index = alphabet.indexOf(char);
      if (index === -1) return char;
      return alphabet[(index + key) % 26];
    })
    .join("");
}
