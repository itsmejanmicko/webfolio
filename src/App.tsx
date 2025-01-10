import { useEffect } from "react";
import Route from "./router/Route";

export default function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  return (
    <main className="min-h-screen dark:bg-bg bg-white text-white dark:text-white">
      {Route()}
    </main>
  );
}
