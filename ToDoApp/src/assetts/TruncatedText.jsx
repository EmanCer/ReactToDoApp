import React, { useState, useEffect } from "react";

function TruncatedText({ text, maxLength }) {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    function updateTruncatedText() {
      const screenWidth = window.innerWidth;
      const calculatedMaxLength = maxLength || Math.floor(screenWidth / 20);
      setTruncatedText(
        text.length > calculatedMaxLength
          ? `${text.substring(0, calculatedMaxLength)}...`
          : text
      );
    }

    updateTruncatedText();

    window.addEventListener("resize", updateTruncatedText);

    return () => {
      window.removeEventListener("resize", updateTruncatedText);
    };
  }, [text, maxLength]);

  return <span>{truncatedText}</span>;
}

export default TruncatedText;
