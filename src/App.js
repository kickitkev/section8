import React, { useEffect } from "react";
import Card from "./components/UI/Card";
import UserForm from "./components/features/UserForm";
import { Container, Divider, Grid, Typography } from "@mui/material";
import "./App.css";

function App() {
  const [userDetails, setUserDetails] = React.useState([]);

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

  console.log(userDetails);

  return (
    <Container maxWidth="xs" style={{ marginTop: "50px" }}>
      <Grid container spacing={4}>
        <Grid item md={12}>
          <Card>
            <Grid container spacing={4}>
              <Grid item md={12}>
                <Grid item md={12}>
                  <Typography margin={2} variant="h5">
                    Enter Your Details
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item={12}>
                  <UserForm onAddUser={addUserHandler} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        {userDetails.map((user) => (
          <Grid item md={12}>
            <Card style={{ marginBottom: "20px" }} key={user.id}>
              <p>
                <b>Name:</b> {user.name} <b>Age:</b> {user.age}
              </p>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
