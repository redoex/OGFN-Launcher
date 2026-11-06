import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { House, Library, Settings } from "lucide-react";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
  <main className={`container ${darkMode ? "dark" : "light"}`}>
    <h1>Ogfn Launcher</h1>

    {page === "Settings" && (
  <div className="settings-page">
    <h2>Settings</h2>

    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Dark Mode: ON" : "Dark Mode: OFF"}
    </button>
  </div>
)}

  <nav className="navbar">
   <button onClick={() => setPage("Home")}>
  <House size={20} />
  </button>
   <button onClick={() => setPage("Library")}>
  <Library size={20} />
  </button>
   <button onClick={() => setPage("Settings")}>
  <Settings size={20} />
  </button>
  </nav>

  </main>
  );
}

export default App;