import './App.css';
import AdminLogin from './Components/AdminLogin.js';
import UserLogin from './Components/UserLogin';
import UserRegistration from './Components/UserRegistration';
import Button from './Components/Button'



function App() {
  return (
    <div className="App">
    <UserLogin/>
    <AdminLogin/>
    <UserRegistration/>
    
    </div>
  );
}
export default App;
