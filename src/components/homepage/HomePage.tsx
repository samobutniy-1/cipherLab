import { Rain } from "./Rain";
import { ScrambleText } from "./ScrambleText";

const CHARS = ["ア", "∑", "Ψ", "0", "1", "!", "@", "#", "≠"];

function randChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function HomePage() {
  return (
    <>
      <Rain randChar={randChar} />
      <ScrambleText text="cipherLab" randChar={randChar} />
    </>
  );
}
