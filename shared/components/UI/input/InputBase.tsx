import { InputAdornment, TextField, createTheme } from "@mui/material";
import React from "react";

interface InputBaseProps {
  label: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setNumberInput?: (value: string | number) => void;
  name?: string;
  style?: React.CSSProperties;
  max12?: boolean;
}

const InputBase: React.FC<InputBaseProps> = ({
  label,
  value,
  onChange,
  setNumberInput,
  name = "",
  style,
  max12 = false,
}) => {
  return (
    <TextField
      style={style}
      label={label}
      value={value}
      onChange={onChange}
      color="primary"
      variant="outlined"
      inputProps={{
        style: {
          fontSize: 18,
          color: "#fff",
          paddingRight: 22,
          borderRadius: 16,
        },
        maxLength: max12 ? 12 : undefined,
      }}
      InputProps={{
        endAdornment: name && (
          <InputAdornment style={{ color: "#fff" }} position="end">
            <p>{name}</p>
          </InputAdornment>
        ),
      }}
      sx={{
        ".MuiOutlinedInput-root": {
          borderRadius: "16px",
        },
      }}
    />
  );
};

export default InputBase;
