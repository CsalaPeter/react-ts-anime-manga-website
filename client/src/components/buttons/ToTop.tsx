import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../../styles/components/buttons/toTop.css";

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="toTop"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <FaArrowUp className="upArrow" />
    </button>
  );
};

export default ToTop;
