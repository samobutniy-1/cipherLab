import { useState, useEffect } from "react";

export function useTypingCipher(plain: string, encrypted: string) {
  const [text, setText] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);
  useEffect(() => {
    let i = 0;
    let phase = "typing";
    let isEnc = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = isEnc ? encrypted : plain;
      if (phase === "typing") {
        i++;
        setText(current.slice(0, i));
        if (i >= current.length) {
          phase = "pause";
          timer = setTimeout(tick, 1200);
          return;
        }
        timer = setTimeout(tick, 70);
      } else if (phase === "pause") {
        phase = "erasing";
        timer = setTimeout(tick, 0);
      } else if (phase === "erasing") {
        i--;
        setText(current.slice(0, i));
        if (i <= 0) {
          isEnc = !isEnc;
          setIsEncrypted(isEnc);
          phase = "pause2";
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, 40);
      } else if (phase === "pause2") {
        phase = "typing";
        timer = setTimeout(tick, 0);
      }
    }
    timer = setTimeout(tick, 0);
    return () => clearTimeout(timer);
  }, [plain, encrypted]);
  return { text, isEncrypted };
}
