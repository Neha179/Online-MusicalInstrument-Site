import { getUser } from '../Utils/Common.js';

function Profile(props){
    const user=getUser();

    const showprofile =() =>{
      console.log(user.firstName);
      console.log(user);
    }

    return(
      <div>
      <h1>Welcome</h1>
      <button onClick={showprofile}>click</button>
      </div>
    );
}

export default Profile;
