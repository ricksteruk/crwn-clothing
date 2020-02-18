import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartIconDiv, ShoppingIconStyles, CountSpan }from './cart-icon.styles';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconDiv onClick={toggleCartHidden}>
        <ShoppingIconStyles />
        <CountSpan >{itemCount}</CountSpan>
    </CartIconDiv>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStatetoProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});


export default connect(
    mapStatetoProps,
    mapDispatchToProps
    )
    (CartIcon);