import { Link } from "react-router";

interface Cipher {
  id: number;
  name: string;
  type: string;
  level: "easy" | "medium" | "hard";
  prewiewText: string;
  encrypt: (text: string) => string;
}

export function Ciphers() {
  const ciphers: Cipher[] = [];
  return (
    <div className="bg-[#0a0a0f] w-full h-full flex ">
      <Link to="/" className="btn-matrix">
        back
      </Link>

      <div>
        <h2 className="text-white">//ciphers</h2>
        <span className="text-white">{ciphers.length} ciphers</span>
      </div>
    </div>
  );
}
