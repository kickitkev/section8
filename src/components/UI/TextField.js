import { TextField } from "@mui/material";

const TextInput = ({
  variant,
  id,
  label,
  type,
  fullWidth,
  onAddValue,
  value,
}) => {
  const onChangeHandler = (event) => {
    onAddValue(event.target.value);
  };

  return (
    <>
      <TextField
        variant={variant}
        label={label}
        id={id}
        value={value}
        type={type}
        fullWidth={fullWidth}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default TextInput;
