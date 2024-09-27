import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";
import { Moon, Sun } from "../IconSet";
import { useRef } from "react";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <button
      className="infobar-button"
      onClick={() => {
        playAudio();
        toggleTheme();
      }}
    >
      <audio ref={audioRef} src="/audio/Pop.mp3" />
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            initial={{ scale: 0.5, rotate: 20 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: -20 }}
            transition={{ duration: 0.2 }}
            key="light-theme"
          >
            <Moon />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, rotate: 20 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: -20 }}
            transition={{ duration: 0.2 }}
            key="dark-theme"
          >
            <Sun />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeSwitcher;
