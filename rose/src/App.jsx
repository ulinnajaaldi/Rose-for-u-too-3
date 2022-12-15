import Rose from "./components/Rose";
import Typewriter from "typewriter-effect";

export const App = () => {
  return (
    <>
      <div className="h-[100vh] bg-[#E16666]">
        <div className="font-bold text-center">
          <Typewriter
            options={{
              strings: ["Hallo Semuanyaa", "ini cuma contoh"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Rose />
      </div>
    </>
  );
};
