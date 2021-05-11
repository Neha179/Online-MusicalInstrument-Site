import './App.css';
 import AdminLogin from './Components/AdminLogin.js';
 import UserLogin from './Components/UserLogin';
import UserRegistration from './Components/UserRegistration';

function App() {
  return (
    <div className="App">
      <AdminLogin />
      <UserLogin />
      <UserRegistration />
    </div>
  );
}
export default App;
