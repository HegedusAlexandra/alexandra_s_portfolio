import { React, useEffect, useState } from "react";

export default function Scroll() {
  const [visib, setVisib] = useState(null);

  useEffect(() => {
    const handleScroll = (event) => {
      setVisib(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {visib > 200 && (
        <button
          id="scrollUp"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Scroll to top
        </button>
      )}
    </div>
  );
}
