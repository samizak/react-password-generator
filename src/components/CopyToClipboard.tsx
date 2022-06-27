import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "@mui/material";

export default function CopyToClipboard({ generatedPassword }: any) {
  const [isActive, setActive] = useState(false);

  const [copyText, setCopyText] = useState("Copy");

  return (
    <>
      <Tooltip
        id="copy-tooltip"
        title={copyText}
        arrow
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "1.125rem",
              bgcolor: "common.black",
              "& .MuiTooltip-arrow": {
                color: "common.black",
              },
            },
          },
        }}
        enterTouchDelay={0}
      >
        <ContentCopyIcon
          className="copy-image-icon"
          onClick={() => {
            navigator.clipboard.writeText(generatedPassword);
            setActive(!isActive);
            setCopyText("Copied!");
          }}
          onMouseOut={() => {
            setTimeout(() => {
              setCopyText("Copy");
            }, 300);
          }}
        />
      </Tooltip>
    </>
  );
}
