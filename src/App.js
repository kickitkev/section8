import React, { useEffect } from "react";
import BasicCard from "./components/UI/Card";
import UserForm from "./components/features/UserForm";
import "./App.css";

function App() {
  const [userDetails, setUserDetails] = React.useState([{}]);

  const addUserHandler = (enteredName, enteredAge) => {
    setUserDetails([
      ...userDetails,
      {
        name: enteredName,
        age: enteredAge,
        id: Math.random(),
      },
    ]);
  };

  return (
    <>
      <BasicCard variant="outlined">
        <UserForm onAddUser={addUserHandler} />
        <ul>
          {userDetails.map((user) => (
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </li>
          ))}
        </ul>
      </BasicCard>
    </>
  );
}

export default App;
