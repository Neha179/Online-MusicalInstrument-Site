package com.ibm.buybeats.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.entity.Cart;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.entity.Wish;
import com.ibm.buybeats.exception.CartEmptyException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.exception.WishAlreadyExistsException;
import com.ibm.buybeats.exception.WishEmptyException;
import com.ibm.buybeats.repository.CartRepository;
import com.ibm.buybeats.repository.ProductRepository;
import com.ibm.buybeats.repository.UserRepository;
import com.ibm.buybeats.repository.WishRepository;

@Service
public class ShoppingServiceImpl implements ShoppingService {

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private CartRepository cartRepo;

	@Autowired
	private WishRepository wishRepo;

	@Override
	public Product findProductById(int pid) throws ProductNotFoundException {

		Product product = productRepo.findById(pid).get();
		if (product == null)
			throw new ProductNotFoundException("Product Not Found");
		else
			return product;

	}

	@Override
	public List<Product> findProductByName(String productName) throws ProductNotFoundException {
		List<Product> p = productRepo.findByProductName(productName);
		if (p.size() == 0)
			throw new ProductNotFoundException("Product Not Found");
		else
			return p;
	}

	@Override
	public Cart addToCart(Cart cart, int pid, int uid) {

		User user = userRepo.findById(uid).get();
		cart.setUser(user);

		Product product = productRepo.findById(pid).get();
		cart.setProduct(product);
		user.getCart().add(cart);
		return cartRepo.save(cart);
	}

	@Override
	public Wish addToWish(int pid, int uid) throws WishAlreadyExistsException {
		Wish wish = new Wish();
		User user = userRepo.findById(uid).get();
		wish.setUser(user);
		Product product = productRepo.findById(pid).get();
		for (Wish w : user.getWish()) {
			if (w.getProduct() == product) {
				throw new WishAlreadyExistsException("Product is already added to wishlist");
			}

		}
		wish.setProduct(product);
		user.getWish().add(wish);
		return wishRepo.save(wish);
	}

	// this remove from cart will
	// remove all carts pertaining to UID
	// so make sure make an entry in order first before remove from cart

	@Override
	public boolean removeFromCart(User user, int entryId) {

//		for (Cart c : user.getCart()) {
//			System.out.println("cart's product_id : " + c.getProduct().getPid());//commment this
//			if (pid == c.getProduct().getPid()) {
//
//				user.getCart().remove(c);
//
//				cartRepo.delete(c);
//
//				return true;
//
//			}
//
//		}
//
//		return false;
		Cart cart = cartRepo.findById(entryId).get();
		user.getCart().remove(cart);
		cartRepo.delete(cart);
		return true;
	}

	@Override
	public boolean removeFromWish(User user, int wid) {
		// TODO Auto-generated method stub
		// List<Wish> wishes = user.getWish();
//		for (Wish w : user.getWish()) {
//			if (pid == w.getProduct().getPid()) {
//				System.out.println("wish's productId: "+w.getProduct().getPid());//comment this
//				user.getWish().remove(w);
//				wishRepo.delete(w);
//				return true;
//			}
		Wish wish= wishRepo.findById(wid).get();
		user.getWish().remove(wish);
		wishRepo.delete(wish);
		return true;
	}

	@Override
	public Set<Cart> showCart(int uid) throws CartEmptyException {
		// TODO Auto-generated method stub
		User user = userRepo.findById(uid).get();
		if (user.getCart().isEmpty())
			throw new CartEmptyException("Cart is Empty");
		return user.getCart();
	}

	@Override
	public Set<Wish> showWish(int uid) throws WishEmptyException {
		// TODO Auto-generated method stub
		User user = userRepo.findById(uid).get();
		if (user.getWish().isEmpty())
			throw new WishEmptyException("Wish List is Empty..!");
		return user.getWish();
	}

	@Override
	public Cart addWishToCart(Cart cart, int wid) {
		// TODO Auto-generated method stub
		Wish wish = wishRepo.findById(wid).get();
		User user = wish.getUser();
		Product product = wish.getProduct();
		cart.setUser(user);
		cart.setProduct(product);
		wishRepo.delete(wish);
		user.getWish().remove(wish);

		return cartRepo.save(cart);
	}

}
