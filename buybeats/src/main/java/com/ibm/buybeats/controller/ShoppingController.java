package com.ibm.buybeats.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.entity.Product;

@RestController
@RequestMapping("/home")
public class ShoppingController {

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
