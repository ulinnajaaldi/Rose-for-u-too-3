import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Rose from "../components/Rose";

export const LandingPage = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const localValue = JSON.parse(localStorage.getItem("Nama"));
    if (localValue) {
      setInputValue(localValue);
    }
  }, []);

  return (
    <div className="h-[100vh] bg-red-400">
      <div className="relative ">
        <div className="font-bold text-red-50 text-3xl absolute top-[40vh] left-1/3">
          <Typewriter
            options={{
              strings: [
                `Hi ${inputValue}`,
                "Love you <3",
                "From Abang Ulinn:))",
              ],
              delay: "natural",
              pauseFor: 5000,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <Rose />
    </div>
  );
};
