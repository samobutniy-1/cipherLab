import { caesarEncrypt } from "./encrypts/caesarEncrypt";

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
    previewText: "HELLO WORLD!",
    encrypt: (text) => caesarEncrypt(text, 3),
  },
  {
    id: 2,
    slug: "b64",
    name: "Base64",
    type: "Encoding",
    level: "easy",
    previewText: "HELLO",
    encrypt: (text) => text,
  },
  {
    id: 3,
    slug: "key",
    name: "Vigenere Cipher",
    type: "Polyalphabetic",
    level: "medium",
    previewText: "HELLO",
    encrypt: (text) => text,
  },
  {
    id: 4,
    slug: "rsa",
    name: "RSA",
    type: "Asymmetric",
    level: "hard",
    previewText: "HELLO",
    encrypt: (text) => text,
  },
];
