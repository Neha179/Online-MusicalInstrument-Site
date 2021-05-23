package com.ibm.buybeats.controller;

import java.util.List;

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

import com.ibm.buybeats.entity.Address;
import com.ibm.buybeats.entity.CardDetails;
import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.NoAddressFound;
import com.ibm.buybeats.exception.NoCardsFound;
import com.ibm.buybeats.exception.NoOrderFoundException;
import com.ibm.buybeats.exception.StockNotAvaialble;
import com.ibm.buybeats.service.OrderService;

/**
 * This class represents controller for Order
 * @author Arya P Menon
 * @author Darshan Kansara
 * @author Monalisa
 * @version 1.0
 */

@CrossOrigin()
@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	@GetMapping(value = "/viewOrders", produces = "application/json")
	public ResponseEntity<?> showOrders(HttpSession session) {
		User user = (User) session.getAttribute("USER");
		if(user!=null) {
			try {
				return new ResponseEntity<List<Order>>(orderService.showOrders(user.getUid()),HttpStatus.OK);
			} catch (NoOrderFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return new ResponseEntity<String>("No orders found", HttpStatus.BAD_REQUEST);
			}
		}
		return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping(value = "/placeOrder/{aid}", produces = "application/json")
	public ResponseEntity<?> placeOrder(@PathVariable int aid,@RequestParam int uid){
		
		
			try {  
				Order order=orderService.placeOrder(uid, aid);				
				return new ResponseEntity<Order>(order, HttpStatus.OK);
			} catch (StockNotAvaialble e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return new ResponseEntity<String>("Stock not available for some requested products", HttpStatus.OK);
			}
		
		
	}
	
	@GetMapping(value = "/viewOrderDetails/{oid}", produces = "application/json")
	public ResponseEntity<?> viewOrderDetails(@PathVariable int oid,HttpSession session){
		User user = (User) session.getAttribute("USER");
		if(user!=null)
			return new ResponseEntity<List<OrderDetails>>(orderService.viewOrderDetails(oid), HttpStatus.OK);
		return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping(value = "/viewAddress/{uid}", produces = "application/json")
	public ResponseEntity<?> viewAddress(@PathVariable int uid) {
		List<Address> addresses;
		try {
			addresses = orderService.viewAddress(uid);
			return new ResponseEntity<List<Address>>(addresses,HttpStatus.OK);
		} catch (NoAddressFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new ResponseEntity<String>("No address found",HttpStatus.OK);
		}		
	}
	
	@GetMapping(value = "/viewCards", produces = "application/json")
	public ResponseEntity<?> viewCard(HttpSession session) {
		User user = (User) session.getAttribute("USER");
		if(user!=null) {
			try {
				return new ResponseEntity<List<CardDetails>>(orderService.viewCard(user.getUid()),HttpStatus.OK);
			} catch (NoCardsFound e) {
				e.printStackTrace();
				return new ResponseEntity<String>("No Card found. Add one!", HttpStatus.BAD_REQUEST);
			}
		}
		return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping(value="/confirmOrder/{oid}",produces="application/json")
	public ResponseEntity<?> confirmOrder(@PathVariable int oid,@RequestParam int code){
		
			return new ResponseEntity<String>(orderService.confirmOrder(oid, code), HttpStatus.OK);
		
	}
	
	
}
