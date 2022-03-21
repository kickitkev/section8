import React from "react";
import TextField from "../UI/TextField";
import Button from "../UI/Button";
import { Grid } from "@mui/material";
import ResponsiveDateTimePickers from "../UI/ResponsiveDateTimePickers";

const UserForm = (props) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const onNameHandler = (enteredName) => {
    setName(enteredName);
  };

  const onAddAgeHandler = (enteredAge) => {
    setAge(enteredAge);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(name, age);
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ResponsiveDateTimePickers />
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
            variant="outlined"
            size="large"
            fullWidth={true}
            type="submit"
          >
            Add User
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;
