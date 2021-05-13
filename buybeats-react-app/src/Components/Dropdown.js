import React from "react";

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    viewProfile = () => {

    }
    viewOrder = () => {

    }
    viewCart = () => {

    }
    viewWish =() => {

    }
    logout = () => {
        
    }
    render() {
        return (
            <DropdownButton id="dropdown-item-button" title="User">
                 <Dropdown.ItemText></Dropdown.ItemText>
                 <Dropdown.Item as="button" onClick ={() => this.viewProfile()}>View Profile</Dropdown.Item>
                 <Dropdown.Item as="button" onClick ={() => this.viewOrder()}>Order</Dropdown.Item>
                 <Dropdown.Item as="button" onClick ={() => this.viewCart()}>Cart</Dropdown.Item>
                 <Dropdown.Item as="button" onClick ={() => this.viewWish()}>Wishlist</Dropdown.Item>
                 <Dropdown.Item as="button" onClick ={() => this.logout()}>Logout</Dropdown.Item>
            </DropdownButton>
        );
    }
}