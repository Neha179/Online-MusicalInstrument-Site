package com.ibm.buybeats.service;

import java.util.List;
import java.util.Set;

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

	List<Product> findProductByName(String productName) throws ProductNotFoundException;

	Cart addToCart(Cart cart, int pid, int uid);

	boolean removeFromCart(User user, int pid);

	boolean removeFromWish(User user, int pid);

	Set<Cart> showCart(int uid) throws CartEmptyException;

	Cart addWishToCart(Cart cart, int wid);

//	Wish addToWish(Wish wish, int pid, int uid) throws WishAlreadyExistsException;

	Set<Wish> showWish(int uid) throws WishEmptyException;

	Wish addToWish(int pid, int uid) throws WishAlreadyExistsException;

	

	

}