import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
};

export default function Figure({ src, alt, caption }: FigureProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <figure style={{ margin: "var(--space-xl) 10px" }}>
        <img
          onClick={() => setVisible(true)}
          src={src}
          alt={alt}
          style={{ width: "100%", height: "auto", cursor: "pointer" }}
        />
        <figcaption style={{ color: "var(--color-text-muted)" }}>
          {caption}
        </figcaption>
      </figure>

      <Lightbox
        open={visible}
        close={() => setVisible(false)}
        // Only supports a single slide!
        slides={[{ src }]}

        render={{
          // Hide prev/next buttons
          buttonPrev: () => null,
          buttonNext: () => null,

          // Workaround: forces the image to enlarge to fill lightbox
          slide: ({ slide }) => (
            <img
              src={slide.src}
              alt={alt}
              style={{
                width: "100%",
                objectFit: "contain",
                display: "block",
                margin: "2%",
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
            margin: 0,
            padding: 0,
          },
        }}
      />
    </>
  );
}
