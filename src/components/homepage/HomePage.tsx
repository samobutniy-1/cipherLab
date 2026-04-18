import { Rain } from "./Rain";
import { ScrambleText } from "./ScrambleText";
import { Link } from "react-router";

const CHARS = ["ア", "∑", "Ψ", "0", "1", "!", "@", "#", "≠", "カ"];

function randChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function HomePage() {
  return (
    <>
      <Rain randChar={randChar} />
      <div className="flex flex-col justify-center items-center gap-10">
        <ScrambleText text="cipherLab" randChar={randChar} />
        <Link
          className="text-white relative z-50 text-2xl bg-transparent border border-gray-600 rounded-xl p-3"
          to="/ciphers"
        >
          explore ciphers
        </Link>
      </div>
    </>
  );
}
