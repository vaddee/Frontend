
import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import TodoList from "./TodoList";


function App() {
  return (
    <>
    <Container maxWidth="xl">
      <CssBaseline/>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            Todos

          </Typography>
        </Toolbar>
     
      </AppBar>
    <TodoList />
    </Container>
      
    </>
  );
}

export default App;