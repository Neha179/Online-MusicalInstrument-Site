package com.ibm.buybeats.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.entity.Cart;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.entity.Wish;
import com.ibm.buybeats.exception.CartEmptyException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.exception.WishAlreadyExistsException;
import com.ibm.buybeats.exception.WishEmptyException;
import com.ibm.buybeats.repository.ProductRepository;
import com.ibm.buybeats.service.AdminService;
import com.ibm.buybeats.service.ShoppingService;
import com.ibm.buybeats.service.UserService;

@RestController
@RequestMapping("/home")
public class ShoppingController {
	
	@Autowired
    private UserService userService;
	
	@Autowired
    private ShoppingService shoppingService;
	
	

	@GetMapping(value="/search/{name}", produces="application/json")
	public List<Product> searchByName(@PathVariable("name") String productName) {
		
		try {
            return shoppingService.findProductByName(productName);
        } catch (ProductNotFoundException e) {
            e.printStackTrace();
            return null;
        }
		
	}
	
	@GetMapping(value="/wish",produces = "application/json")
    public List<Wish> showWish(HttpSession session) throws WishEmptyException {
        User user = (User) session.getAttribute("USER");
        return shoppingService.showWish(user); 
    }
	
	@PostMapping(value="/wish/add/{pid}", produces = "application/json")
	public Wish addToWish(@PathVariable int pid, HttpSession session) {
		  User user = (User) session.getAttribute("USER");
		  
		  
		try {
			return shoppingService.addToWish(pid, user.getUid());
		} catch (WishAlreadyExistsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@PostMapping(value="/wish/remove/{pid}", produces = "application/text")
    public String removeFromWish(@PathVariable int pid, HttpSession session ) {
        User user = (User) session.getAttribute("USER");
        if(shoppingService.removeFromWish(user, pid))
            return "Product removed...!";
        else
            return "No product removed...!";
    }
	
	
	@GetMapping(value="/cart", produces = "application/json")
    public List<Cart> showCart(HttpSession session) throws CartEmptyException {
        User user = (User) session.getAttribute("USER");
        return shoppingService.showCart(user.getUid());
    }
	
	@PostMapping(value="/cart/add/{pid}", produces = "application/json")
	public Cart addToCart(@RequestBody Cart cart,@PathVariable int pid, HttpSession session) {
		User user = (User) session.getAttribute("USER");
		
		
		
		
		return shoppingService.addToCart(cart, pid, user.getUid());
	}
	
	@PostMapping(value="/cart/remove/{pid}", produces = "application/json")
	public String removeFromCart(@PathVariable int pid,HttpSession session) {
		User user = (User) session.getAttribute("USER");
		
		 if(shoppingService.removeFromCart(user, pid))
			 return "product is removed from cart";
		 else
			 return "product is not removed from cart";
	}
	
	@PostMapping(value="/wish/cart/{wid}", produces = "application/json", consumes = "application/json")
    public Cart addWishToCart(@RequestBody Cart cart, @PathVariable int wid) {
        return shoppingService.addWishToCart(cart, wid);
    }
	
}
