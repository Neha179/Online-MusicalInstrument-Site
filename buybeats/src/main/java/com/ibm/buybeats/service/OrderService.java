package com.ibm.buybeats.service;

import com.ibm.buybeats.entity.Cart;
import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.NoOrderFoundException;
import com.ibm.buybeats.exception.StockNotAvaialble;

public interface OrderService {
	

	//OrderDetails placeOrder(Order oid) throws StockNotAvaialble;
	
	OrderDetails showOrders(User email) throws NoOrderFoundException;

	OrderDetails placeOrder(Cart cart) throws StockNotAvaialble;

	//Order placeOrder(Cart entryID) throws StockNotAvaialble;
}
