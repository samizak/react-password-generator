import "./Styles/App.css";
import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { GeneratePassword } from "./utils/GeneratePassword";
import CopyToClipboard from "./components/CopyToClipboard";
import Settings from "./components/Settings/Settings";
import InputContainer from "./components/InputContainer/InputContainer";

function App() {
  const [passwordSettings, setPasswordSettings] = useState({
    passwordLength: 8,
    useLowerCase: true,
    useUpperCase: true,
    useNumbers: true,
    useSymbols: true,
  });

  const [generatedPassword, setGeneratedPassword] = useState("");

  function UpdatePassword() {
    setGeneratedPassword(new GeneratePassword().Create(passwordSettings));
  }

  useEffect(() => {
    UpdatePassword();
  }, []);

  return (
    <div className="App">
      <h1 className="no-select">Password Generator</h1>

      <div className="container">
        <InputContainer
          UpdatePassword={UpdatePassword}
          generatedPassword={generatedPassword}
        />

        <Settings
          passwordSettings={passwordSettings}
          setPasswordSettings={setPasswordSettings}
          setGeneratedPassword={setGeneratedPassword}
          UpdatePassword={UpdatePassword}
        />
      </div>
    </div>
  );
}

export default App;
