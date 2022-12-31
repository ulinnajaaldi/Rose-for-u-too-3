import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";

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
                "Keep pushing !!",
                "Never give up.",
              ],
              delay: "natural",
              pauseFor: 5000,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <Spline scene="https://prod.spline.design/yXQH3kWa4eKV8snA/scene.splinecode" />
    </div>
  );
};
