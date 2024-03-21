import React, { useState } from "react";
import { AppBar, Container, CssBaseline, Toolbar, Typography, Tabs, Box } from "@mui/material";
import TodoList from "./TodoList";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Home from "./components/Home";
import StyledTab from "./components/StyledTab"; // Tuodaan StyledTab-komponentti

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Todos
          </Typography>
        </Toolbar>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <StyledTab label="Todos" />
          <StyledTab label="Home" />
        </Tabs>
      </AppBar>
      <Container maxWidth="xl">
        <Box hidden={tabValue !== 0}>
          <TodoList />
        </Box>
        <Box hidden={tabValue !== 1}>
          <Home />
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default App;
