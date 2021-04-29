package com.ibm.buybeats.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.exception.NoOrderFoundException;
import com.ibm.buybeats.service.OrderService;

@RestController
@RequestMapping
public class OrderController {
	private OrderService orderService;
	
	@GetMapping(value = "/profile/orders/{uid}", produces = "application/json")
	public List<Order> orderList(@PathVariable("uid") int uid) throws NoOrderFoundException {
		
		List<Order> o = orderService.showOrders(uid);
		return o;
	}

}
