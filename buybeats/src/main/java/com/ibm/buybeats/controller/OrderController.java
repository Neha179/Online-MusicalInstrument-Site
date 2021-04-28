package com.ibm.buybeats.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.service.OrderService;

@RestController
@RequestMapping
public class OrderController {
	private OrderService orderService;
	
	@GetMapping(value = "/profile/orders/{email}", produces = "application/json")
	public OrderDetails orderList(@PathVariable("email") String email) {
		
		OrderDetails od = orderService.showOrders();
		return od;
	}

}
