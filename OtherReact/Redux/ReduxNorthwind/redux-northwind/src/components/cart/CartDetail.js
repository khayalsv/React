import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as cartAction from "../../redux/actions/cartActions"
import { Table, Button } from 'reactstrap';
import aletify from "alertifyjs"

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.action.removeFromCart(product);
        aletify.error(product.productName + " removed item")
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color='danger' onClick={() => this.removeFromCart(cartItem.product)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: {
            removeFromCart: bindActionCreators(cartAction.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);