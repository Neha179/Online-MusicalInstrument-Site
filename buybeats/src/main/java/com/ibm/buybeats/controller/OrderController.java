package com.ibm.buybeats.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.NoOrderFoundException;
import com.ibm.buybeats.service.OrderService;

@RestController
@RequestMapping
public class OrderController {
	private OrderService orderService;
	
	@PostMapping(value = "/profile/orders/{uid}")
	public List<Order> orderList(@PathVariable("uid") int uid, HttpSession session) throws NoOrderFoundException {
		User user = (User) session.getAttribute("USER");
		List<Order> o = orderService.showOrders(user.getUid());
		return o;
	}
	
//	@PostMapping(value = "/profile/placeorder/{uid}")
//	public Order (@PathVariable("uid") int uid, HttpSession session) {
//		User user = (User) session.getAttribute("USER");
//		Order o = orderService.placeOrder(order, uid);
//		
//	}
		

}
