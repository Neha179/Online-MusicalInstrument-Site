import React from 'react';
import '../CSS/ViewProfile.css';
import Image from '../Images/userprofile.jpg';
import Button from './Button';
import {withRouter} from 'react-router-dom';
import auth from './Auth.js';
import UserService from '../Services/UserService';


class UpdateProfile extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            firstName : JSON.parse(localStorage.getItem("user")).firstName,
            lastName : JSON.parse(localStorage.getItem("user")).lastName,
            phoneNumber : JSON.parse(localStorage.getItem("user")).phoneNumber,
            email : JSON.parse(localStorage.getItem("user")).email,
            password : JSON.parse(localStorage.getItem("user")).password,
        }
        console.log(this.state.password);

    
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
        console.log(this.state.firstName);

    }

    saveProfile = (e) => {
        e.preventDefault();
        console.log(this.state.password)
        if(this.state.password=='')
            this.setState({password : JSON.parse(localStorage.getItem("user")).password})
        UserService.updateProfile(this.state).then(res => 
            {console.log(res.data)
                       
            if(res.data!="User not logined") //coming from backend
            {
                localStorage.removeItem("user");
                localStorage.setItem("user",JSON.stringify(res.data))
                console.log(localStorage.getItem("user"));
                this.setState(
                {   firstName : JSON.parse(localStorage.getItem("user")).firstName,
                lastName : JSON.parse(localStorage.getItem("user")).lastName,
                phoneNumber : JSON.parse(localStorage.getItem("user")).phoneNumber,
                email : JSON.parse(localStorage.getItem("user")).email,
                password : JSON.parse(localStorage.getItem("user")).password
            });
            console.log(this.state.firstName);
          }
        });
        setTimeout(() => this.props.history.push('/profile'), 500);
    }

    cancel = () => {
        this.props.history.push('/profile');
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
                <form onSubmit={this.saveProfile}>
                <table className="table">
                    <tr><td colSpan="2" className="head">Update Profile</td></tr><br />
                    <tr>
                        <td><label>First Name:</label></td>
                        <td><input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInput}/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Last Name:</label></td>
                        <td><input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInput}/></td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td><label>Phone Number:</label></td>
                        <td><input type="text" name="phoneNumber" value={this.state.phoneNumber} pattern="[7-9][0-9]{9}" onChange={this.handleInput}/> </td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Password:</label></td>
                        <td><input type="password" name="password" value={this.state.password} pattern=".{5,}" onChange={this.handleInput}/></td>
                    </tr>
                    <br/ >
                 <tr>
                 <th ><Button buttonStyle={"btn--primary--solid"}  buttonSize={"btn--large"} onClick={this.cancel}>Cancel</Button></th>
                 <th ><Button buttonStyle={"btn--green--solid"}  buttonSize={"btn--large"} type={"submit"}>Save</Button></th>
                </tr>
                </table>
                </form>
            </div>
            </>

        );
    }
}
export default withRouter (UpdateProfile);