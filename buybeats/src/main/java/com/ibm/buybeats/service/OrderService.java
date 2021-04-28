package com.ibm.buybeats.service;

import com.ibm.buybeats.entity.Cart;
import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.NoOrderFoundException;
import com.ibm.buybeats.exception.StockNotAvaialble;

public interface OrderService {
	

 
	OrderDetails placeOrder(Cart cart, User user) throws StockNotAvaialble;

	OrderDetails showOrders(int oid) throws NoOrderFoundException;

	//Order placeOrder(Cart entryID) throws StockNotAvaialble;
}
