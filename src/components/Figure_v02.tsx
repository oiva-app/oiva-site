import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = [
  { src: "/src/assets/figures/900-finals/export/101.svg" },
];

export default function Gallery() {
  const [visible, setVisible ] = useState(false)
  return (
    <>
      <div style={{ display: "block" }}>
        {slides.map((s, i) => (
          <button key={i} onClick={() => setVisible(true)} style={{ width: "100%", height: "auto", padding: 0, border: 0, cursor: "pointer", background: "none" }}>
            <img src={s.src} alt="" style={{ width: "100%", height: "auto" }} />
          </button>
        ))}
      </div>
      <Lightbox open={visible} close={() => setVisible(false)} slides={slides} />
    </>
  );
}