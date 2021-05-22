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
 * @author Neha Gupta
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
	public ResponseEntity<?> placeOrder(@PathVariable int aid,HttpSession session){
		User user = (User) session.getAttribute("USER");
		if(user!=null) {
			try {
				orderService.placeOrder(user.getUid(), aid);				
				return new ResponseEntity<String>("Order is placed, verfication code sent.", HttpStatus.OK);
			} catch (StockNotAvaialble e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return new ResponseEntity<String>("Stock not available for some requested products", HttpStatus.OK);
			}
		}
		return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
		
	}
	
	@GetMapping(value = "/viewOrderDetails/{oid}", produces = "application/json")
	public ResponseEntity<?> viewOrderDetails(@PathVariable int oid,HttpSession session){
		User user = (User) session.getAttribute("USER");
		if(user!=null)
			return new ResponseEntity<List<OrderDetails>>(orderService.viewOrderDetails(oid), HttpStatus.OK);
		return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping(value = "/viewAddress/{uid}", produces = "application/json")
	public ResponseEntity<?> viewAddress(@PathVariable int uid) throws NoAddressFound{
		List<Address> addresses = orderService.viewAddress(uid);
		if(addresses!=null)
			return new ResponseEntity<List<Address>>(addresses,HttpStatus.OK);
		else
			return new ResponseEntity<String>("Address not found", HttpStatus.NOT_FOUND);
		}
	
	@GetMapping(value = "/viewCards/{uid}", produces = "application/json")
	public ResponseEntity<?> viewCard(@PathVariable int uid) throws NoCardsFound {
		if(uid!=0) {
				return new ResponseEntity<List<CardDetails>>(orderService.viewCard(uid),HttpStatus.OK);
			}else {
				
				return new ResponseEntity<String>("User not logged in", HttpStatus.NOT_FOUND);
			}
	}
	
	@PostMapping(value="/confirmOrder/{oid}",produces="application/json")
	public ResponseEntity<?> confirmOrder(@PathVariable int oid,@RequestParam int code,HttpSession session){
		User user = (User) session.getAttribute("USER");
		if(user!=null)
			return new ResponseEntity<String>(orderService.confirmOrder(oid, code), HttpStatus.OK);
		return new ResponseEntity<String>("User not logged in", HttpStatus.BAD_REQUEST);
	}
	
	
}
