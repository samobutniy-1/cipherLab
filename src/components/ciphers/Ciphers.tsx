import { Link } from "react-router";

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
