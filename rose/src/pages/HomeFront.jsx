import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HomeFront = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("Nama", JSON.stringify(inputValue));
  }, [inputValue]);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-red-400">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Rose Is Yours</h1>
            <p className="pt-6 pb-3">{data?.content}</p>
            <cite>{data?.author}</cite>
            <form className="pt-6 gap-6 flex flex-col items-center justify-center">
              <input
                type="text"
                placeholder="How do I call you?"
                className="input input-bordered input-md w-full max-w-xs text-center"
                value={inputValue}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-success">
                <Link to={"/rose"}>Lets Go!</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
