import React, { ChangeEvent } from "react";
import { Checkbox } from "@mui/material";

type PropsType = {
  checked: boolean;
  color:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default"
    | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SuperCheckBox: React.FC<PropsType> = ({
  checked,
  color,
  onChange,
}) => {
  return <Checkbox checked={checked} color={color} onChange={onChange} />;
};
