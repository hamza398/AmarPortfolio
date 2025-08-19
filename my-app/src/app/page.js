import Image from "next/image";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Header from "./components/Header";
import '@/app/globals.css';
export default function Home() {
  return (
    <>
        <main className="max-w-6xl mx-auto p-4 space-y-6">
    <Header />
    <Skills />
    <Projects />
  </main>
    </>
  );
}
