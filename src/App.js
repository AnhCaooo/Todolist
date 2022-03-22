import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TabApp from './component/TabApp';

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
      <TabApp/>
    </div>
  );
}

export default App;
