import './App.css';
import TodoList from './component/TodoList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar style={{background: '#2E3B55'}} position="static">
          <Toolbar>
            <Typography variant="h6" >
              My Todolist
            </Typography>
          </Toolbar>
        </AppBar>
      <TodoList/>
    </div>
  );
}

export default App;
