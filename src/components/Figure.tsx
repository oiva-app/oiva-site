import { useState, type CSSProperties } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  clickable: boolean;
  style?: CSSProperties;
};

export default function Figure({
  src,
  alt,
  caption,
  clickable = false,
  style,
}: FigureProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <figure
        style={{
          margin: "var(--space-xl) 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          className="invert-when-dark"
          onClick={clickable ? () => setVisible(true) : () => {}}
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "auto",
            cursor: clickable ? "pointer" : "auto",
            ...style,
          }}
        />
        <figcaption
          style={{
            color: "var(--color-text-muted)",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          {caption}
        </figcaption>
      </figure>

      {!clickable ? null : (
        <Lightbox
          open={visible}
          plugins={[Zoom]}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 3,
            wheelZoomDistanceFactor: 0.8,
          }}
          close={() => setVisible(false)}
          // Only supports a single slide!
          slides={[{ src }]}
          render={{
            // Hide prev/next buttons
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          carousel={{ padding: 0, spacing: 0 }}
          controller={{ closeOnBackdropClick: true }}
          styles={{
            container: {
              background: "var(--color-surface)",
              // background: "rgba(0, 0, 0, 0.40)",
              margin: 0,
              padding: 0,
            },
          }}
        />
      )}
    </>
  );
}
