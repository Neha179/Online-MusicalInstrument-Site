package com.ibm.buybeats.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.ibm.buybeats.exception.InvalidCredentialsException;
import com.ibm.buybeats.service.UserService;

/**
 * This class represents controller for User
 * @author Arya P Menon
 * @author Aakansha Arora
 * @version 1.0
 */

@CrossOrigin()
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping(value="/login", consumes = "application/json", produces="application/json")
	public String login(@RequestBody Login login) throws InvalidCredentialsException {
		User user = userService.login(login);
		if(user != null) {
			return "Logged in successfully";
		} else
			throw new InvalidCredentialsException("Invalid Username or Password");
	}
	
	
	@GetMapping(value = "/profile", produces = "application/json")
	public ResponseEntity<?> viewProfile( HttpSession session) {
		User user = (User) session.getAttribute("USER");
		if(user !=null) {
			return new ResponseEntity<User>(userService.viewProfile(user.getEmail()),HttpStatus.OK);
		}
		else
			return new ResponseEntity<String>("User not logined", HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping(value="profile/update", consumes = "application/json")
	public ResponseEntity<?> updateProfile(@RequestBody User user, HttpSession session) {
		if(session.getAttribute("USER")!=null) 
			return new ResponseEntity<User>(userService.updateUser(user),HttpStatus.OK);
		else
			return new ResponseEntity<String>("User not logined", HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping(value="/register" , consumes="application/json" )
	public String addUser(@RequestBody User user) throws EmailAlreadyExistsException {
		User u = userService.saveUser(user);
		if(u != null)
			return u.getFirstName() + ", Welcome to BuyBeats..! Login to continue..";
		else
			throw new EmailAlreadyExistsException("User already exists. Please change your email..!");
	   
	}
	
	
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "Logged out successfully";
	}
	
	@PostMapping(value = "/addAddress", consumes = "application/json")
	public ResponseEntity<?> addAddress(@RequestBody Address address,HttpSession session) {
		User user = (User) session.getAttribute("USER");
		if(user !=null) 
			return new ResponseEntity<Address>(userService.addAddress(address, user.getEmail()),HttpStatus.OK);
		else
			return new ResponseEntity<String>("User not logined", HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping(value = "/addCard", consumes = "application/json")
	public ResponseEntity<?> addCard(@RequestBody CardDetails card,HttpSession session) {
		User user = (User) session.getAttribute("USER");
		if(user !=null) 
			return new ResponseEntity<CardDetails>(userService.addCard(card, user.getEmail()),HttpStatus.OK);
		else
			return new ResponseEntity<String>("User not logined", HttpStatus.BAD_REQUEST);
	}
}


