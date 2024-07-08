"use client";

import { useState, ChangeEvent } from "react";
import styles from "@/styles/Home.module.css";

const Home: React.FC = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(event.target.value);
    };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.container}>
      <h1>Translator App</h1>
      <input
        type="text"
        value={input1}
        onChange={handleInputChange(setInput1)}
        placeholder="Enter text here"
        className={styles.input}
      />
      <input
        type="text"
        value={input2}
        onChange={handleInputChange(setInput2)}
        placeholder="Enter text here"
        className={styles.input}
      />
      <textarea
        value={output}
        onChange={handleInputChange(setOutput)}
        placeholder="Output will appear here"
        readOnly
        className={styles.textarea}
      />
      <button onClick={() => copyToClipboard(input1)} className={styles.button}>
        Copy Input 1
      </button>
      <button onClick={() => copyToClipboard(input2)} className={styles.button}>
        Copy Input 2
      </button>
      <button onClick={() => copyToClipboard(output)} className={styles.button}>
        Copy Output
      </button>
    </div>
  );
};

export default Home;
