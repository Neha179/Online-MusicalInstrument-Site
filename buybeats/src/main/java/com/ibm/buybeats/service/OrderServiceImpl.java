package com.ibm.buybeats.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.entity.Cart;
import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.NoOrderFoundException;
import com.ibm.buybeats.exception.StockNotAvaialble;
import com.ibm.buybeats.repository.AddressRepository;
import com.ibm.buybeats.repository.CardDetailsRepository;
import com.ibm.buybeats.repository.CartRepository;
import com.ibm.buybeats.repository.OrderDetailsRepository;
import com.ibm.buybeats.repository.OrderRepository;
import com.ibm.buybeats.repository.ProductRepository;
import com.ibm.buybeats.repository.UserRepository;
import com.ibm.buybeats.repository.WishRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private AddressRepository addRepo;
	
	@Autowired
	private CardDetailsRepository cdRepo;
	
	@Autowired
	private OrderDetailsRepository odRepo;
	
	@Autowired
	private OrderRepository oRepo;
	
	@Autowired
	private ProductRepository pRepo;
	
	@Autowired
	private CartRepository ctRepo;
	
	@Autowired
	private WishRepository wRepo;

	
	//for one entry
	
	@Override                       
	public OrderDetails placeOrder(Cart cart, User user) throws StockNotAvaialble {

		Product p = cart.getProduct();
		Order o = new Order();
		OrderDetails od = new OrderDetails();
		od.setPrice(od.getPrice()); // same do for all other details of product
		
		
		return null;
		
		
	}

	
	
	@Override
	public Order showOrders(int oid) throws NoOrderFoundException //fetch all the orders history of the user {
		
		
		return oRepo.findById(oid).get();
	}
	
	
	
	
	
	
}
