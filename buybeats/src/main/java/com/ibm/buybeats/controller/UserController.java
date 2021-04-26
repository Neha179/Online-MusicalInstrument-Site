package com.ibm.buybeats.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.service.ShoppingService;
import com.ibm.buybeats.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	
//	@Autowired
//	private ShoppingService shoppingService;
	
	@GetMapping(name="/profile/{email}", produces="application/json")
	public User viewProfile(User u) {
		return u;
	}
	
	@PostMapping(name="profile/update/{email}", produces = "application/json")
	public User updateProfile(@RequestBody User u) {
		return u;
	}
	
	@PostMapping(value="/register" , consumes="application/json" )
	public String addUser(@RequestBody User user) {
		try {
			User u=userService.saveUser(user);
			return u.getFirstName()+", Welcome to BuyBeats!!";
		} catch (EmailAlreadyExistsException e) {
			e.printStackTrace();
			return "cannot save";
		}
	   
	}
	
	@PostMapping(value="/login", produces="application/json")
	public String login(@RequestBody User user) {
		return null;
	}
	
	@GetMapping(value="/home" , produces="application/json")
	public void homePage() {
		
	}
	
	@GetMapping(value="/search/{name}", produces="application/json")
	public void searchByName() {
		
	}
	
	@GetMapping(value="/wish",produces = "application/json")
	public void showWish() {
		
	}
	
	@PostMapping(value="/wish/add", produces = "application/json")
	public String addToWish(@RequestBody Product p) {
		return null;
	}
	
	@PostMapping(value="/wish/remove", produces = "application/json")
	public String removeFromWish(@RequestBody Product p) {
		return null;
	}
	
	
	@GetMapping(value="/cart",produces = "application/json")
	public void showCart() {
		
	}
	
	@PostMapping(value="/cart/add", produces = "application/json")
	public String addToCart(@RequestBody Product p) {
		return null;
	}
	
	@PostMapping(value="/cart/remove", produces = "application/json")
	public String removeFromCart(@RequestBody Product p) {
		return null;
	}
	
	@PostMapping(value="/wish/cart/add", produces = "application/json")
	public String addWishToCart(@RequestBody Product p) {
		return null;
	}
	
}
