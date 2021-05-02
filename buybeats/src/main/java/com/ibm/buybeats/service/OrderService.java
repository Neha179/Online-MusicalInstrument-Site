package com.ibm.buybeats.service;

import java.util.List;

import com.ibm.buybeats.entity.Address;
import com.ibm.buybeats.entity.CardDetails;
import com.ibm.buybeats.entity.Cart;
import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.NoAddressFound;
import com.ibm.buybeats.exception.NoCardsFound;
import com.ibm.buybeats.exception.NoOrderFoundException;
import com.ibm.buybeats.exception.StockNotAvaialble;


public interface OrderService {

	List<Order> showOrders(int oid) throws NoOrderFoundException;

	Order placeOrder(int uid, int aid) throws StockNotAvaialble;
	
	List<OrderDetails> viewOrderDetails(int oid);
	
	List<Address> viewAddress(int uid) throws NoAddressFound;
	
	List<CardDetails> viewCard(int uid) throws NoCardsFound;
}
