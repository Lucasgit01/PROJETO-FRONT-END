import { useState } from "react";
import "../assets/Sidebar.css";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion, type Transition } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
};

const pageTransition: Transition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Painel</h2>

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="menu">
          <a href="/home">Home</a>
          <a href="/teste">Perfil</a>
          <a href="#">Configurações</a>
        </nav>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Conteúdo */}
      <div className="content">
        <header className="header">
          <button
            className="menu-btn"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <h1>Dashboard</h1>
        </header>

        <main className="main">
          <AnimatePresence mode="wait">
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}