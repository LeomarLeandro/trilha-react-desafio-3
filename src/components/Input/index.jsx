import React from "react";
import { Controller } from "react-hook-form";
import { InputContainer, InputText, IconContainer } from "./styles";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const icons = {
  user: <FaUser />,
  email: <FaEnvelope />,
  lock: <FaLock />
};

const Input = ({ leftIcon, name, control, rules, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon && <IconContainer>{icons[leftIcon]}</IconContainer>}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => <InputText {...field} {...rest} />}
      />
    </InputContainer>
  );
};

export { Input };
