import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function CopyToClipboard({ generatedPassword }: any) {
  const [isActive, setActive] = useState(false);

  return (
    <div className="copy-image no-select">
      <ContentCopyIcon
        className="copy-image-icon"
        onClick={() => {
          navigator.clipboard.writeText(generatedPassword);
          setActive(!isActive);

          let tooltip = document.getElementById("copy-tooltip") as HTMLElement;
          tooltip.innerHTML = "Copied!";
        }}
        onMouseOut={() => {
          let tooltip = document.getElementById("copy-tooltip") as HTMLElement;
          tooltip.innerHTML = "Copy";
        }}
      />

      <span id="copy-tooltip" className="tooltip no-select">
        Copy
      </span>
    </div>
  );
}
