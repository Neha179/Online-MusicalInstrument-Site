package com.ibm.buybeats.controller;

/**
 * This class represents controller for Shopping
 * @author Darshan Kansara
 * @author Arya P Menon
 * @version 1.0
 */

import java.util.List;
import java.util.Set;

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
import org.springframework.web.bind.annotation.RequestParam;
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

@CrossOrigin()
@RestController
@RequestMapping("/home")
public class ShoppingController {
	
	@Autowired
    private UserService userService;
	
	@Autowired
    private ShoppingService shoppingService;
	
	

	@GetMapping(value="/search/{name}", produces="application/json")
	public ResponseEntity<?> searchByName(@PathVariable("name") String productName) {
		 
			try {
	            return new ResponseEntity<List<Product>>(shoppingService.findProductByName(productName),HttpStatus.OK);
	        } catch (ProductNotFoundException e) {
	            e.printStackTrace();
	            return new ResponseEntity<String>("Product not found", HttpStatus.OK);
	        }
		
		
	}
	
	@GetMapping(value="/wish",produces = "application/json")
    public ResponseEntity<?> showWish(HttpSession session){
        User user = (User) session.getAttribute("USER");
        if(user!=null) {
        	 try {
				return new ResponseEntity<Set<Wish>>(shoppingService.showWish(user.getUid()),HttpStatus.OK);
			} catch (WishEmptyException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return new ResponseEntity<String>("Wish List is empty!", HttpStatus.OK);
			} 
        }
        return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
       
    }
	
	@PostMapping(value="/wish/add/{pid}", produces = "application/json")
	public ResponseEntity<?> addToWish(@PathVariable int pid, HttpSession session) {
		 User user = (User) session.getAttribute("USER");
		 if(user!=null) {
			try {
				return new ResponseEntity<Wish>(shoppingService.addToWish(pid, user.getUid()),HttpStatus.OK);
			} catch (WishAlreadyExistsException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return new ResponseEntity<String>("Wish already exist..!",HttpStatus.BAD_REQUEST);
			}
		 }
		 return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping(value="/wish/remove/{wid}", produces = "application/text")
    public ResponseEntity<?> removeFromWish(@PathVariable int wid, HttpSession session ) {
        User user = (User) session.getAttribute("USER");
        if(user!=null) {
	        if(shoppingService.removeFromWish(user, wid))
	            return  new ResponseEntity<String>("Product removed...!",HttpStatus.OK);
	        else
	            return new ResponseEntity<String>("No product removed...!",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
    }
	
	
	@GetMapping(value="/cart/{uid}", produces = "application/json")
    public ResponseEntity<?> showCart(@PathVariable int uid) {
        
		
		try {
			return new ResponseEntity<Set<Cart>>(shoppingService.showCart(uid), HttpStatus.OK);
		} catch (CartEmptyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new ResponseEntity<String>("Cart is Empty", HttpStatus.OK);
		}
		
			
	}
	
	@PostMapping(value="/cart/add/{pid}", produces = "application/json")
	public ResponseEntity<?> addToCart(@RequestBody Cart cart,@PathVariable int pid,@RequestParam int uid) {
		
			return new ResponseEntity<Cart>(shoppingService.addToCart(cart, pid, uid),HttpStatus.OK);
		
	}
	
	@PostMapping(value="/cart/remove/{entryId}", produces = "application/json")
	public ResponseEntity<?> removeFromCart(@PathVariable int entryId,HttpSession session) {
		User user = (User) session.getAttribute("USER");
		if(user!=null) {
			 if(shoppingService.removeFromCart(user, entryId))
				 return new ResponseEntity<String>("Product removed from cart", HttpStatus.OK);
			 else
				 return new ResponseEntity<String>("Product is not removed from cart", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping(value="/wish/cart/{wid}", produces = "application/json", consumes = "application/json")
    public ResponseEntity<?> addWishToCart(@RequestBody Cart cart, @PathVariable int wid, HttpSession session) {
		if(session.getAttribute("USER")!=null)
			return new ResponseEntity<Cart>(shoppingService.addWishToCart(cart, wid),HttpStatus.OK);
		return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
    }
	
}
