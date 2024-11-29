import { InputAdornment, TextField } from "@mui/material";
import React from "react";

interface InputBaseProps {
  label: string;
  value?: string | number;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setNumberInput?: (value: string | number) => void;
  name?: string;
  style?: React.CSSProperties;
  max?: number;
}

const InputBase: React.FC<InputBaseProps> = ({
  label,
  value,
  onChange,
  name = "",
  style,
  type = "text",
  max,
}) => {
  return (
    <TextField
      style={style}
      label={label}
      value={value}
      onChange={onChange}
      color="primary"
      variant="outlined"
      type={type}
      inputProps={{
        style: {
          fontSize: 18,
          color: "#fff",
          paddingRight: 22,
          borderRadius: 16,
        },
        maxLength: max,
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
