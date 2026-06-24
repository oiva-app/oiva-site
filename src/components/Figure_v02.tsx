import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


type FigureProps = {
  src: string | { src: string };
  alt: string;
  caption: string;
};

export default function Figure({ src, alt, caption }: FigureProps) {
  const [visible, setVisible] = useState(false);

  let imagePath: string = ""

  if (typeof src !== "string") {
    imagePath = src.src
  } else {
    imagePath = src
  }

  return (
    <>
      <figure>
        <img
          onClick={() => setVisible(true)}
          src={imagePath}
          alt={alt}
          style={{ width: "100%", height: "auto", cursor: "pointer" }}
        />
        <figcaption>{caption}</figcaption>
      </figure>

      <Lightbox
        open={visible}
        close={() => setVisible(false)}
        slides={[{ src: imagePath }]}
        render={{
          // Hide prev/next buttons if not needed
          buttonPrev: () => null,
          buttonNext: () => null,

          // Workaround: forces the image to enlarge to fill lightbox
          slide: ({ slide }) => (
            <img
              src={slide.src}
              alt=""
              style={{
                width: "100%",
                objectFit: "contain",
                display: "block",
                padding: "2%",
                background: "var(--color-surface)",
              }}
            />
          ),
        }}
        carousel={{ padding: 0, spacing: 0 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: {
            background: "rgba(0, 0, 0, 0.40)",
            padding: 0,
            margin: 0,
          },
        }}
      />
    </>
  );
}
