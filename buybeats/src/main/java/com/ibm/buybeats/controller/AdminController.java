package com.ibm.buybeats.controller;

import java.util.List;
import java.util.NoSuchElementException;

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
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.service.AdminService;

/**
 * This class represents controller for Admin
 * @author Aakansha Arora 
 * @author Monalisa
 * @version 1.0
 */


@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;

	
	@PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> validateLogin(@RequestBody Login login, HttpSession session) {
		Admin admin = adminService.validateLogin(login);
		if (admin != null) {
			session.setAttribute("ADMIN", admin);
			return new ResponseEntity<String>("Logged in successfully..! ",HttpStatus.OK);
		} else
			return new ResponseEntity<String>("Invalid Credentials", HttpStatus.NOT_FOUND);
	}

	
	
	@PostMapping(value = "/add/product", consumes = "application/json")
	public ResponseEntity<?> addProduct(@RequestBody Product product, HttpSession session) {
		if (session.getAttribute("ADMIN")!=null) {
			return new ResponseEntity<Product>(adminService.saveProduct(product),HttpStatus.OK);
		} else
			return new ResponseEntity<String>("Admin not logined",HttpStatus.NOT_FOUND);
	}

	
	
	@PostMapping(value = "/update/product", consumes = "application/json" ,produces = "application/json")
	public ResponseEntity<?> updateProduct(@RequestBody Product p, HttpSession session) {
		if (session.getAttribute("ADMIN")!=null) {
			try {
				return new ResponseEntity<Product>(adminService.updateProduct(p),HttpStatus.OK);
			} catch (NoSuchElementException | ProductNotFoundException e) {
				return new ResponseEntity<String>("Product not found",HttpStatus.OK);
			}
		} else
			return new ResponseEntity<String>("Admin not found",HttpStatus.NOT_FOUND);
	}

	
	
	@GetMapping(value = "/search/product/{pid}", produces = "application/json")
	public ResponseEntity<?> searchProduct(@PathVariable int pid, HttpSession session) {
		if (session.getAttribute("ADMIN") != null) {
			try {
				return new ResponseEntity<Product>(adminService.findProductById(pid), HttpStatus.OK);
			} catch (NoSuchElementException | ProductNotFoundException e) {
				e.printStackTrace();
				return new ResponseEntity<String>("Product not found", HttpStatus.OK);
			}
		} else
			return new ResponseEntity<String>("Admin not logined", HttpStatus.NOT_FOUND);
}

	
	
	@GetMapping(value = "/search/product/name/{name}", produces = "application/json")
	public ResponseEntity<?> findProductByName(@PathVariable("name") String productName, HttpSession session) {
		if (session.getAttribute("ADMIN") != null) {
			try {
				return new ResponseEntity<List<Product>>(adminService.findProductByName(productName), HttpStatus.OK);
			} catch (ProductNotFoundException e) {
				e.printStackTrace();
				return new ResponseEntity<String>("Product not found", HttpStatus.OK);
			}
		} else
			return new ResponseEntity<String>("Admin not logined", HttpStatus.NOT_FOUND);
	}
}
