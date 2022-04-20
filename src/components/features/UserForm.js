import React, { useState, useEffect } from "react";
import TextField from "../UI/TextField";
import Button from "../UI/Button";
import { Grid } from "@mui/material";
import Modal from "../features/Modal";

const UserForm = ({ onAddUser }) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onNameHandler = (enteredName) => {
    setName(enteredName);
  };

  const onAddAgeHandler = (enteredAge) => {
    setAge(enteredAge);
  };

  const isError = () => {
    let errorMessage;

    if (!name || !age) {
      errorMessage = "You cannot leave either field blank";
    } else if (age < 0) {
      errorMessage = "Age must be greater than 0";
    }
    return errorMessage;
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (isError()) {
      setOpen(true);
    } else {
      onAddUser(name, age);
    }
  };

  useEffect(() => {
    isError();
  }, []);

  return (
    <form onSubmit={onFormSubmitHandler}>
      <Modal error={isError()} open={open} onClose={handleClose} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Name"
            label="Name"
            variant="filled"
            onAddValue={onNameHandler}
            value={name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            id="Age"
            label="Age"
            variant="filled"
            type="number"
            onAddValue={onAddAgeHandler}
            value={age}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            type="submit"
            label="Add User"
          />
          <Button
            variant="outlined"
            size="large"
            fullWidth={true}
            label="Clear"
            onClick={() => {
              setName("");
              setAge("");
            }}
            style={{ marginTop: 20 }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;
