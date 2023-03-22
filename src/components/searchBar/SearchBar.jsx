import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        className={styles.search}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input className={styles.button} type="submit" value="🔍" />
    </form>
  );
}
