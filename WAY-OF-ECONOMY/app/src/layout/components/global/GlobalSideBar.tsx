import { useState } from "react";
import "../../assets/css/Sidebar.css";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion, type Transition } from 'framer-motion';
import { useAuthStore } from "../auth/authStore";
import { BriefcaseBusinessIcon } from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 50 },
};

const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

export const Sidebar = () => {
  const authStore = useAuthStore();
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <BriefcaseBusinessIcon /><h2>{authStore.role}</h2>

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
          <div className="hamburguer-area">
            <button
              className="menu-btn"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
            <div className="store-name">
              <span>W</span>
              <span>A</span>
              <span>Y</span>
              <span>o</span>
              <span>f</span>
              <span>E</span>
              <span>C</span>
              <span>O</span>
              <span>N</span>
              <span>O</span>
              <span>M</span>
              <span>Y</span>
            </div>
          </div>
          <div className="avatar">
            <p className="animated-text">{`Olá, ${authStore.name}`}</p>
            <img className="avatar-image" src={authStore.avatar} width={20} />
          </div>
        </header>

        <main>
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