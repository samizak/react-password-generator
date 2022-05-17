import React, { useEffect } from "react";
import "./App.css";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";

import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

import { GeneratePassword } from "./utils/GeneratePassword";
import CopyToClipboard from "./components/CopyToClipboard";

function ValueLabelComponent(props: any) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

let _passwordLength: any = -1;

function App() {
  const [passwordLength, setPasswordLength] = React.useState<any>(8);
  const [useLowerCase, setUseLowerCase] = React.useState(true);
  const [useUpperCase, setUseUpperCase] = React.useState(true);
  const [useNumbers, setUseNumbers] = React.useState(true);
  const [useSymbols, setUseSymbols] = React.useState(true);

  const [generatedPassword, setGeneratedPassword] = React.useState("");

  function UpdateGeneratedPassword(password: any) {
    setGeneratedPassword(password);
  }

  function UpdatePassword() {
    const passwordSettings = {
      passwordLength,
      useLowerCase,
      useUpperCase,
      useNumbers,
      useSymbols,
    };
    const _password = new GeneratePassword().Create(passwordSettings);
    UpdateGeneratedPassword(_password);
  }

  useEffect(() => {
    UpdatePassword();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="no-select">Password Generator</h1>

        <div className="input-container">
          <textarea
            className="ow"
            id="generated-password"
            readOnly
            wrap="soft"
            value={generatedPassword}
            style={{
              border: "none",
              width: "100%",
              overflow: "hidden",
              resize: "none",
            }}
          />

          <div className="password-icons">
            <CopyToClipboard generatedPassword={generatedPassword} />

            <div className="generate-image">
              <RefreshOutlinedIcon onClick={UpdatePassword} />
              <span className="tooltip">Generate</span>
            </div>
          </div>
        </div>

        <div className="settings">
          <h3>Settings</h3>

          <hr className="divider" />

          <div className="password-length-container">
            <div className="password-length-label">
              <p className="no-select">Length</p>
            </div>

            <Slider
              valueLabelDisplay="auto"
              defaultValue={6}
              components={{
                ValueLabel: ValueLabelComponent,
              }}
              onChange={(e, v) => {
                _passwordLength = passwordLength;
                setPasswordLength(v);

                // Code below stops endless password generation
                if (v !== _passwordLength) {
                  UpdatePassword();
                }
              }}
              min={8}
              max={64}
              aria-label="custom thumb label"
            />

            <div className="password-length-value">
              <p className="no-select">{passwordLength}</p>
            </div>
          </div>

          <hr className="divider" />

          <div className="switch-container">
            <div className="switch-row">
              <p className="no-select">Use Upper Case</p>
              <Switch
                checked={useUpperCase}
                onChange={(e) => setUseUpperCase(e.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>

            <hr className="divider" />

            <div className="switch-row">
              <div>
                <p className="no-select">Use Lower Case</p>
              </div>

              <div>
                <Switch
                  checked={useLowerCase}
                  onChange={(e) => setUseLowerCase(e.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>

            <hr className="divider" />

            <div className="switch-row">
              <p className="no-select">Use Numbers</p>
              <Switch
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>

            <hr className="divider" />

            <div className="switch-row">
              <div>
                <p className="no-select">Use Symbols</p>
              </div>

              <div>
                <Switch
                  checked={useSymbols}
                  onChange={(e) => setUseSymbols(e.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
