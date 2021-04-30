package com.ibm.buybeats.service;

import java.util.List;

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

	Wish addToWish(int pid, int uid) throws WishAlreadyExistsException;

	boolean removeFromCart(User user, int pid);

	boolean removeFromWish(User user, int pid);

	List<Cart> showCart(int uid) throws CartEmptyException;

	List<Wish> showWish(User user) throws WishEmptyException;

	Cart addWishToCart(Cart cart, int wid);

	

	

}