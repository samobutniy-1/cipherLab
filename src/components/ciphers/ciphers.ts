export interface Cipher {
  id: number;
  slug: string;
  name: string;
  type: string;
  level: "easy" | "medium" | "hard";
  previewText: string;
  encrypt: (text: string) => string;
}

export const ciphers: Cipher[] = [
  {
    id: 1,
    slug: "rot",
    name: "Caesar Cipher",
    type: "Substitution",
    level: "easy",
    previewText: "HELLO",
    encrypt: (text) => text,
  },
  {
    id: 2,
    slug: "b64",
    name: "Base64",
    type: "Encoding",
    level: "easy",
    previewText: "ENCODE",
    encrypt: (text) => text,
  },
];
