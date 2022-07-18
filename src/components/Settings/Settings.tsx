import { Slider, Switch, Tooltip } from "@mui/material";

function ValueLabelComponent(props: any) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function Settings(props: {
  passwordSettings: any;
  setPasswordSettings: any;
  setGeneratedPassword: any;
  UpdatePassword: any;
}) {
  return (
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
            const _passwordLength = props.passwordSettings.passwordLength;
            props.setPasswordSettings({
              ...props.passwordSettings,
              passwordLength: v as number,
            });

            // Code below stops endless password generation
            if (v !== _passwordLength) {
              props.UpdatePassword();
            }
          }}
          min={8}
          max={64}
          aria-label="custom thumb label"
        />

        <div className="password-length-value">
          <p className="no-select">{props.passwordSettings.passwordLength}</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="switch-container">
        <div className="switch-row">
          <p className="no-select">Use Upper Case</p>
          <Switch
            checked={props.passwordSettings.useUpperCase}
            onChange={(e) => {
              return props.setPasswordSettings({
                ...props.passwordSettings,
                useUpperCase: e.target.checked,
              });
            }}
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
              checked={props.passwordSettings.useLowerCase}
              onChange={(e) => {
                return props.setPasswordSettings({
                  ...props.passwordSettings,
                  useLowerCase: e.target.checked,
                });
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>

        <hr className="divider" />

        <div className="switch-row">
          <p className="no-select">Use Numbers</p>
          <Switch
            checked={props.passwordSettings.useNumbers}
            onChange={(e) => {
              return props.setPasswordSettings({
                ...props.passwordSettings,
                useNumbers: e.target.checked,
              });
            }}
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
              checked={props.passwordSettings.useSymbols}
              onChange={(e) => {
                return props.setPasswordSettings({
                  ...props.passwordSettings,
                  useSymbols: e.target.checked,
                });
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
