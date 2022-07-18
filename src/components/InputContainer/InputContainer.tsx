import { useState } from "react";
import CopyToClipboard from "../CopyToClipboard";
import { Tooltip } from "@mui/material";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

export default function InputContainer(props: {
  UpdatePassword: any;
  generatedPassword: any;
}) {
  const [animationGenerateButton, setAnimationGenerateButton] = useState(false);

  return (
    <div className="input-container">
      <textarea
        className="ow"
        id="generated-password"
        readOnly
        wrap="soft"
        value={props.generatedPassword}
        style={{
          border: "none",
          width: "100%",
          overflow: "hidden",
          resize: "none",
          outline: "none",
          lineHeight: "2ch",
        }}
      />

      <div className="password-icons">
        <CopyToClipboard generatedPassword={props.generatedPassword} />

        <Tooltip
          title="Generate"
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
          <RefreshOutlinedIcon
            id="generate-button"
            className={animationGenerateButton ? "animate-generate" : ""}
            onClick={() => {
              // Play rotate animation onClick
              setAnimationGenerateButton(true);
              setTimeout(() => {
                setAnimationGenerateButton(false);
              }, 300);

              props.UpdatePassword();
              return;
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
}
