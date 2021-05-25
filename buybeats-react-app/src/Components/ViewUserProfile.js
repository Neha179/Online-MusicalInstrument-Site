//Author : Monalisa
import React from 'react';
import '../CSS/ViewProfile.css';
import Image from '../Images/userprofile.jpg';
import Button from './Button';
import {Link, withRouter} from 'react-router-dom';



class ViewProfile extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            update : false
        }


    }
    redirect = (e) => {
        e.preventDefault();
        this.setState ({
            update : true
        })
        if(this.state.update)
        this.props.history.push('/updateprofile');
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
                <form onSubmit={this.redirect}>
                <table className="table">
                    <tr><td colSpan="2" className="head">Profile</td></tr><br />
                    <tr>
                        <td><label>First Name:</label></td>
                        <td><input type="text" name="firstName" value={JSON.parse(localStorage.getItem("user")).firstName} readOnly={true}/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Last Name:</label></td>
                        <td><input type="text" name="lastName" value={JSON.parse(localStorage.getItem("user")).lastName} readOnly={true}/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input type="email" name="email" value={JSON.parse(localStorage.getItem("user")).email} readOnly={true}/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Phone Number:</label></td>
                        <td><input type="text" name="phoneNumber" value={JSON.parse(localStorage.getItem("user")).phoneNumber} readOnly={true}/> </td>
                    </tr>
                 <br />
                 <tr>
                 <th colSpan="2"><Button buttonStyle={"btn--primary--solid"}  buttonSize={"btn--large"} type={"submit"}>Update</Button></th>
                 {/* <Link to="/updateProfile" >Update</Link> */}
                </tr>
                </table>
                </form>
            </div>
            </>

        );
    }
}
export default withRouter (ViewProfile);
