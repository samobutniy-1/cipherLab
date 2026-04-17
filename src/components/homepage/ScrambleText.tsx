import { useState, useEffect, useRef } from "react";

interface Props {
  randChar: () => string;
  text: string;
}

export function ScrambleText({ randChar, text }: Props) {
  const [displayed, setDisplayed] = useState<string[]>(() =>
    text.split("").map(() => randChar()),
  );

  const resolvedRef = useRef<boolean[]>([]);

  useEffect(() => {
    const letters = text.split("");
    resolvedRef.current = letters.map(() => false);

    setDisplayed(letters.map(() => randChar()));

    let phase = 0;

    const scrambler = setInterval(() => {
      setDisplayed(
        letters.map((ch, i) => (resolvedRef.current[i] ? ch : randChar())),
      );
    }, 80);

    function resolveNext() {
      if (phase >= letters.length) {
        clearInterval(scrambler);
        return;
      }
      resolvedRef.current[phase] = true;
      phase++;
      setTimeout(resolveNext, 130);
    }

    setTimeout(resolveNext, 500);
    return () => clearInterval(scrambler);
  }, [text, randChar]);

  return (
    <h1>
      {displayed.map((char, i) => (
        <span key={i} className="text-white relative z-50 text-5xl font-bold">
          {char}
        </span>
      ))}
    </h1>
  );
}
