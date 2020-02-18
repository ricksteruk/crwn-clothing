import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { CartDropdownDiv, CartItemDiv, CartDropdownButton, EmptyMessageSpan } from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

// import { createUserProfileDocument } from '../../firebase/firebase.utils';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownDiv>
        <CartItemDiv>
            {
               cartItems.length ? ( 
               cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            ) : (
                <EmptyMessageSpan>Your cart is Empty</EmptyMessageSpan>
            )
            } 
        </CartItemDiv>    
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }
        }>
        GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownDiv>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));