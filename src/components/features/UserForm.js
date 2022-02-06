import React from "react";
import TextInput from "../UI/TextField";
import StandardButton from "../UI/Button";

const UserForm = (props) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const onNameHandler = (enteredText) => {
    setName(enteredText);
  };

  const onAddAgeHandler = (enteredNumber) => {
    setAge(enteredNumber);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(name, age);
  };

  return (
    <>
      <form onSubmit={onFormSubmitHandler}>
        <TextInput
          fullWidth
          id="Name"
          label="Name"
          variant="filled"
          onAddValue={onNameHandler}
          value={name}
        />
        <TextInput
          fullWidth={true}
          id="Age"
          label="Age"
          variant="filled"
          type="number"
          onAddValue={onAddAgeHandler}
          value={age}
        />
        <StandardButton
          variant="outlined"
          size="large"
          fullWidth={true}
          type="submit"
        >
          Add User
        </StandardButton>
      </form>
    </>
  );
};

export default UserForm;
