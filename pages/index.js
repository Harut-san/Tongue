import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Translator App</title>
        <meta name="description" content="Translator App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Translator App</h1>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter text here"
          className={styles.input}
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter text here"
          className={styles.input}
        />
        <textarea
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          placeholder="Output will appear here"
          readOnly
          className={styles.textarea}
        />
        <button
          onClick={() => copyToClipboard(input1)}
          className={styles.button}
        >
          Copy Input 1
        </button>
        <button
          onClick={() => copyToClipboard(input2)}
          className={styles.button}
        >
          Copy Input 2
        </button>
        <button
          onClick={() => copyToClipboard(output)}
          className={styles.button}
        >
          Copy Output
        </button>
      </main>
    </div>
  );
}
