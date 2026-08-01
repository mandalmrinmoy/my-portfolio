import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import rocket from "../assets/cursor.png";

export default function Cursor() {
  const [hidden, setHidden] = useState(true);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, {
    stiffness: 350,
    damping: 25,
    mass: 0.5,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 350,
    damping: 25,
    mass: 0.5,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setHidden(false);

      const element = e.target.closest(
        "a, button, [data-cursor='pointer']"
      );

      setIsPointer(!!element);
    };

    const leave = () => {
      setHidden(true);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    // ---------- Magnetic Effect ----------
    const elements = document.querySelectorAll(
      "a, button, [data-cursor='pointer']"
    );

    elements.forEach((el) => {
      const handleMove = (e) => {
        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transition = "transform 0.15s ease";
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      };

      const handleLeave = () => {
        el.style.transform = "translate(0px,0px)";
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      el._handleMove = handleMove;
      el._handleLeave = handleLeave;
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);

      elements.forEach((el) => {
        el.removeEventListener("mousemove", el._handleMove);
        el.removeEventListener("mouseleave", el._handleLeave);
      });
    };
  }, []);

  return (
    <motion.img
      src={rocket}
      alt="Rocket Cursor"
      className="fixed top-0 left-0 pointer-events-none z-[9999] select-none"
      draggable={false}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-25%",
        translateY: "-25%",
        opacity: hidden ? 0 : 1,
      }}
      animate={{
        width: isPointer ? 22 : 18,
        rotate: isPointer ? -15 : 0,
        scale: isPointer ? 1.15 : 1,
        filter: isPointer
          ? "drop-shadow(0 0 18px #8b5cf6)"
          : "drop-shadow(0 0 6px #8b5cf6)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    />
  );
}