import { useTypingCipher } from "./useTypingCipher";
import type { Cipher } from "./ciphersData";
import { Link } from "react-router";

interface Props {
  cipher: Cipher;
}

export function CipherCard({ cipher }: Props) {
  const { text, isEncrypted } = useTypingCipher(
    cipher.previewText,
    cipher.encrypt(cipher.previewText),
  );
  return (
    <Link
      to={`/${cipher.slug}`}
      className="border border-white/10 rounded-xl p-5 flex flex-col bg-white/2 hover:border-emerald-500/40 transition-colors"
    >
      <span className={isEncrypted ? "text-red-400" : "text-emerald-400"}>
        {text}
        <span className="animate-blink">|</span>
      </span>
      <h3 className="text-white">{cipher.name}</h3>
      <p className="text-gray-500">{cipher.type}</p>
      <div className="mt-auto pt-4">
        {cipher.level === "easy" && (
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <span
                className="w-2 h-2 rounded-full bg-emerald-500"
                style={{ boxShadow: "var(--shadow-emerald-sm)" }}
              />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <span className="bg-emerald-950 text-emerald-500 border border-emerald-500 rounded-md px-3 py-0.5 text-xs leading-none">
              easy
            </span>
          </div>
        )}
        {cipher.level === "medium" && (
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <span
                className="w-2 h-2 rounded-full bg-yellow-500"
                style={{ boxShadow: "var(--shadow-yellow-sm)" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-yellow-500"
                style={{ boxShadow: "var(--shadow-yellow-sm)" }}
              />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <span className="bg-yellow-950 text-yellow-500 border border-yellow-500 rounded-md px-3 py-0.5 text-xs leading-none">
              medium
            </span>
          </div>
        )}
        {cipher.level === "hard" && (
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <span
                className="w-2 h-2 rounded-full bg-red-500"
                style={{ boxShadow: "var(--shadow-red-sm)" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-red-500"
                style={{ boxShadow: "var(--shadow-red-sm)" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-red-500"
                style={{ boxShadow: "var(--shadow-red-sm)" }}
              />
            </div>
            <span className="bg-red-950 text-red-500 border border-red-500 rounded-md px-3 py-0.5 text-xs leading-none">
              hard
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
