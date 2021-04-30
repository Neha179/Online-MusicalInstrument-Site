package com.ibm.buybeats.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
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
	@PostMapping(value="/login", consumes = "application/json", produces="application/json")
	public ResponseEntity<?> login(@RequestBody Login login, HttpSession session) {
		User user = userService.login(login);
		if(user!=null) {
			session.setAttribute("USER", user);
			return new ResponseEntity<User>(HttpStatus.OK);
		} else
			return new ResponseEntity<String>("Invalid Username or Password", HttpStatus.NOT_FOUND);
	}
	
	
	@GetMapping(value = "/profile/{email}", produces = "application/json")
	public ResponseEntity<?> viewProfile(@PathVariable("email") String email, HttpSession session) {
		if(session.getAttribute("USER")!=null) {
			return new ResponseEntity<User>(userService.viewProfile(email),HttpStatus.OK);
		}
		else
			return new ResponseEntity<String>("User not logined", HttpStatus.NOT_FOUND);
	}
	
	@PostMapping(value="profile/update/{email}", consumes = "application/json")
	public ResponseEntity<?> updateProfile(@RequestBody User user, HttpSession session) {
		if(session.getAttribute("USER")!=null) 
			return new ResponseEntity<User>(userService.updateUser(user),HttpStatus.OK);
		else
			return new ResponseEntity<String>("User not logined", HttpStatus.NOT_FOUND);
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
	
	
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "Logged out successfully";
	}
	
	@PostMapping(value = "/addAddress/{email}", consumes = "application/json")
	public ResponseEntity<?> addAddress(@RequestBody Address address, @PathVariable("email") String email,HttpSession session) {
		if(session.getAttribute("USER")!=null) 
			return new ResponseEntity<Address>(userService.addAddress(address, email),HttpStatus.OK);
		else
			return new ResponseEntity<String>("User not logined", HttpStatus.NOT_FOUND);
	}
	
	@PostMapping(value = "/addCard/{email}", consumes = "application/json")
	public ResponseEntity<?> addCard(@RequestBody CardDetails card, @PathVariable("email") String email,HttpSession session) {
		if(session.getAttribute("USER")!=null) 
			return new ResponseEntity<CardDetails>(userService.addCard(card, email),HttpStatus.OK);
		else
			return new ResponseEntity<String>("User not logined", HttpStatus.NOT_FOUND);
	}
	}


