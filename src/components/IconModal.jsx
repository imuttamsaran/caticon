import { useEffect, useState } from "react";
import "./IconModal.css";

const IconModal = ({ icon, onClose }) => {
  const [svgCode, setSvgCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!icon) return;

    fetch(`/svgIcon/${icon}.svg`)
      .then(res => res.text())
      .then(setSvgCode)
      .catch(() => setSvgCode("Error loading SVG"));
  }, [icon]);

  const handleCopy = () => {
    navigator.clipboard.writeText(svgCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  if (!icon) return null;

  const svgPath = `/svgIcon/${icon}.svg`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>

        <div className="preview-box">
          <img src={svgPath} alt={icon} className="svg-preview" />
        </div>

        <a
          href={svgPath}
          download={`${icon}.svg`}
          className="download-button"
        >
          ⬇ Download SVG
        </a>

        <div
          className={`code-block ${copied ? "copied" : ""}`}
          onClick={handleCopy}
        >
          <h3>Inline SVG Code</h3>
          <pre>
            <code>{copied ? "" : svgCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default IconModal;
