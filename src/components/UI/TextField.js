import { TextField as MuiTextField } from "@mui/material";

const TextField = ({
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
      <MuiTextField
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

export default TextField;
