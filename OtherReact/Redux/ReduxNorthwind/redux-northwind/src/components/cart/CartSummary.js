import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem, NavLink, Badge
} from 'reactstrap'

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as cartAction from "../../redux/actions/cartActions"
import { Link } from "react-router-dom"
import aletify from "alertifyjs"


class CartSummary extends Component {
    removeFromCart(product) {
        this.props.action.removeFromCart(product);
        aletify.error(product.productName + " removed item")
    }

    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Cart empty</NavLink>
            </NavItem>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color='danger' onClick={() => this.removeFromCart(cartItem.product)}>-</Badge>
                                {cartItem.product.productName}
                                <Badge color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to={"/cart"}>
                            Go to Cart
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);