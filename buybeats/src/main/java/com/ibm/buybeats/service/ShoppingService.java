package com.ibm.buybeats.service;

import java.util.Collection;

import com.ibm.buybeats.entity.Cart;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.entity.Wish;
import com.ibm.buybeats.exception.CartEmptyException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.exception.WishAlreadyExistsException;
import com.ibm.buybeats.exception.WishEmptyException;


public interface ShoppingService {

	Product findProductById(int pid) throws ProductNotFoundException;

	Product findProductByName(String productName) throws ProductNotFoundException;

	String addToCart(Cart cart, User user);

	String addToWish(Wish wish, User user) throws WishAlreadyExistsException;

	String removeFromCart(Cart cart, User user);

	String removeFromWish(Wish wish, User user);

	Collection <Cart> showCart(Cart cart, User user) throws CartEmptyException;

    Collection <Wish> showWish(Wish wish, User user) throws WishEmptyException;

}