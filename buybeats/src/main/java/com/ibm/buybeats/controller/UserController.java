package com.ibm.buybeats.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Address;
import com.ibm.buybeats.entity.CardDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	
//	@Autowired
//	private ShoppingService shoppingService;
	
//	@GetMapping(name="/profile/{uid}", produces ="application/json")
//	public User viewProfile(@PathVariable("uid") int uid) {
//		User u = userService.viewProfile(uid);
//		return u;
//	}
	
	@GetMapping(value = "/profile/{email}", produces = "application/json")
	public User viewProfile(@PathVariable("email") String email) {
		User u = userService.viewProfile(email);
		return u;
	}
	
	@PostMapping(value="profile/update/{email}", consumes = "application/json")
	public String updateProfile(@RequestBody User user) {
		userService.updateUser(user);
		return "Profile Updated";
	}
	
	@PostMapping(value="/register" , consumes="application/json" )
	public String addUser(@RequestBody User user) {
		User u = null;
		try {
			u = userService.saveUser(user);
		} catch (EmailAlreadyExistsException e) {
			e.printStackTrace();
			return "User already exists. Please change your email..!";
		}
		return u.getFirstName() + ", Welcome to BuyBeats..!";
	   
	}
	
	@PostMapping(value="/login", consumes = "application/json", produces="application/json")
	public ResponseEntity<?> login(@RequestBody Login login, HttpSession session) {
		User user = userService.login(login);
		if(user!=null) {
			session.setAttribute("USER", user);
			return new ResponseEntity<User>(HttpStatus.OK);
		} else
			return new ResponseEntity<String>("Invalid Username or Password", HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "Logged out successfully";
	}
	
	@PostMapping(value = "/addAddress/{email}", consumes = "application/json")
	public String addAddress(@RequestBody Address address, @PathVariable("email") String email) {
		userService.addAddress(address, email);
		return "Address added successfully";
	}
	
	@PostMapping(value = "/addCard/{email}", consumes = "application/json")
	public String addCard(@RequestBody CardDetails card, @PathVariable("email") String email) {
		userService.addCard(card, email);
		return "Card added successfully";
	}

	
}
