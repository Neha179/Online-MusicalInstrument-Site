import React from 'react';
import '../CSS/ViewProfile.css';
import Image from '../Images/userprofile.jpg';
import Button from './Button';
import {withRouter} from 'react-router-dom';


class ViewProfile extends React.Component
{
    constructor(props){
    super(props);
    this.state = {
    user : []
    }
}
    render(){
        return(
            <>
            <div className="split left">
                <div className="centered">
                <img src={Image} />
                </div>
            </div>
            <div className="split right">
                <form>
                <table className="table">
                    <tr>
                        <td><label>First Name:</label></td>
                        <td><input type="text" name="firstName" value={localStorage.getItem("Fname")} readOnly={true}/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Last Name:</label></td>
                        <td><input type="text" name="lastName" value={localStorage.getItem("Lname")} readOnly={true}/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input type="email" name="email" value={localStorage.getItem("email")} readOnly={true}/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Phone Number:</label></td>
                        <td><input type="text" name="phoneNumber" value={localStorage.getItem("phoneNumber")} readOnly={true}/> </td>
                    </tr>
                 <br /><br />
                 <tr>
                 <th colSpan="2"><Button buttonStyle={"btn--primary--solid"}  buttonSize={"btn--large"} type="submit">Update</Button></th>
                </tr>
                </table>
                </form>
            </div>
            </>

        );
    }
}
export default withRouter (ViewProfile);