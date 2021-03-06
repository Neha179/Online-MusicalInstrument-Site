package com.ibm.buybeats.controller;

import java.util.List;
import java.util.NoSuchElementException;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.exception.InvalidCredentialsException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.service.AdminService;

/**
 * This class represents controller for Admin
 * @author Aakansha Arora 
 * @author Monalisa
 * @version 1.0
 */

@CrossOrigin()
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;

	
	@PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
	public String validateLogin(@RequestBody Login login)  {
		Admin admin;
		try {
			admin = adminService.validateLogin(login);
			if (admin != null) 
				return "Logged in successfully..! ";
		} catch (InvalidCredentialsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "Invalid Credentials";
		}
		return "Invalid Credentials";
		
		
//		} else
//			throw new InvalidCredentialsException("Invalid Credentials");
	}

	
	
	@PostMapping(value = "/add/product", consumes = "application/json")
	public ResponseEntity<?> addProduct(@RequestBody Product product) {
		Product p = adminService.saveProduct(product);
		if (product!=null) {
			return new ResponseEntity<Product>(p,HttpStatus.OK);
		} else
			return new ResponseEntity<String>("Admin not logined",HttpStatus.NOT_FOUND);
	}

	
	
	@PostMapping(value = "/update/product", consumes = "application/json" ,produces = "application/json")
	public ResponseEntity<?> updateProduct(@RequestBody Product p) throws ProductNotFoundException {
		Product product = adminService.updateProduct(p);
		if (product !=null)
				return new ResponseEntity<Product>(product,HttpStatus.OK);
		else
			throw new ProductNotFoundException("Product not found");
	}

	
	
	@GetMapping(value = "/search/product/{pid}", produces = "application/json")
	public ResponseEntity<?> searchProduct(@PathVariable int pid) {
		
			try {
				return new ResponseEntity<Product>(adminService.findProductById(pid),HttpStatus.OK);
			} catch (NoSuchElementException | ProductNotFoundException e) {
				e.printStackTrace();
				return new ResponseEntity<String>("Product not found",HttpStatus.OK);
			}
		
}

	
	
	@GetMapping(value = "/search/product/name/{name}", produces = "application/json")
	public ResponseEntity<?> findProductByName(@PathVariable("name") String productName) {
		
		try {
			return new ResponseEntity <List<Product>>(adminService.findProductByName(productName),HttpStatus.OK);
		} catch (NoSuchElementException | ProductNotFoundException e) {
			e.printStackTrace();
			return new ResponseEntity<String>("Product not found",HttpStatus.OK);
		}
		
	}
	
	@GetMapping(value="/home", produces="application/json")
	public ResponseEntity<?> getAlProducts() {
		
			return new ResponseEntity<List<Product>>(adminService.getProducts(), HttpStatus.OK);
		
	}
}
