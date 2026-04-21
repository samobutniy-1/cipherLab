import { Link } from "react-router";
import { CipherCard } from "./CipherCard";
import { ciphers } from "./ciphersData";

export function Ciphers() {
  return (
    <div className="bg-[#0a0a0f] w-full h-full p-5 flex flex-col gap-4">
      <Link to="/" className="btn-matrix max-w-32">
        ← back
      </Link>
      <div className="flex justify-between">
        <h2 className="text-white">//ciphers</h2>
        <span className="text-gray-500">
          {ciphers.length === 1 ? "1 cipher" : `${ciphers.length} ciphers`}
        </span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        {ciphers.map((cipher) => {
          return <CipherCard key={cipher.id} cipher={cipher} />;
        })}
      </div>
    </div>
  );
}
