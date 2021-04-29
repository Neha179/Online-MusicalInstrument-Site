package com.ibm.buybeats.service;

import java.util.List;

import com.ibm.buybeats.entity.Cart;
import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.NoOrderFoundException;
import com.ibm.buybeats.exception.StockNotAvaialble;


public interface OrderService {
	

 
//	OrderDetails placeOrder(Cart cart, User user) throws StockNotAvaialble;

	List<Order> showOrders(int oid) throws NoOrderFoundException;

	//OrderDetails placeOrder(User user) throws StockNotAvaialble;

//	OrderDetails placeOrder(Order order, User user) throws StockNotAvaialble;

	Order placeOrder(Order order, int uid) throws StockNotAvaialble;

	//Order placeOrder(Cart entryID) throws StockNotAvaialble;
}
