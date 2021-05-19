import React from 'react';
import Button from "./Button.js";

export default class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        // this.service = new AdminService();
        this.state = {
            pid : props.product.pid,
            productName : props.product.productName,
            brand : props.product.brand,
            stock : props.product.stock,
            category : props.product.category,
            colour : props.product.colour,
            size : props.product.size,
            price : props.product.price,
            bodyMaterial : props.product.bodyMaterial,
            stringMaterial : props.product.stringMaterial
        }
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });

    }

    onCancel() {
        this.props.onCancel();
    }

    onUpdate() {
        this.props.onSubmit(this.state);
    }

    render () {
        return (
            // <table>
               <tr>
                <td><input name="pid" value={this.state.pid} required readOnly /></td>
                <td><input name="productName" value={this.state.productName} required onChange={this.handleInput}/></td>
                <td><input name="category" value={this.state.category} required onChange={this.handleInput}/></td>
                <td><input name="brand" value={this.state.brand} required onChange={this.handleInput}/></td>
                <td><input name="stock" type="number" value={this.state.stock} required onChange={this.handleInput}/></td>
                <td><input name="price" type="number" value={this.state.price} required onChange={this.handleInput}/></td>
                <td><input name="size" type="number" value={this.state.size} required onChange={this.handleInput}/></td>
                <td><input name="colour" value={this.state.colour} required onChange={this.handleInput}/></td>
                <td><input name="bodyMaterial" value={this.state.bodyMaterial} required onChange={this.handleInput}/></td>
                <td><input name="stringMaterial" value={this.state.stringMaterial} required onChange={this.handleInput}/></td>
                <td><Button onClick={() => this.onUpdate()} >Update</Button></td>
                </tr>
            // </table>
        )
    }
}