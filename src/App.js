import React, { useEffect } from "react";
import Card from "./components/UI/Card";
import UserForm from "./components/features/UserForm";
import { Container, Grid, Typography } from "@mui/material";
import "./App.css";

function App() {
  const [userDetails, setUserDetails] = React.useState([{}]);

  const addUserHandler = (enteredName, enteredAge) => {
    if (enteredName | (enteredAge === "")) {
      alert("Please enter some detail, YEW!");
    }

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
    <Container
      maxWidth="xs"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid container spacing={4}>
        <Grid item md={12}>
          <Card>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Grid item md={12}>
                  <Typography marginBottom={4} variant="h5">
                    Enter Your Details
                  </Typography>
                </Grid>
                <Grid item={12}>
                  <UserForm onAddUser={addUserHandler} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={12}>
          {userDetails.map((user) => (
            <>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
