import './App.css';
import AdminLogin from './Components/AdminLogin.js';
import UserLogin from './Components/UserLogin';
import UserRegistration from './Components/UserRegistration';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      {/* <br/>
      <br/>
      <br/>
      <br/>
       <Button buttonStyle={"btn--green--solid"}
      buttonSize={"btn--medium"}
      onClick={() => console.log("Thanks  for clicking me")}>

        Click me!
      </Button>  */}
       <UserRegistration /> 
    </div>
  );
}
export default App;
