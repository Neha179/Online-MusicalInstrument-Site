package com.ibm.buybeats.service;

import java.util.List;

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
	public Order placeOrder(Order order,int uid) throws StockNotAvaialble {
		
		User user = userRepo.findById(uid).get();
		order.setUser(user);
		return oRepo.save(order);
		
		
	}

	@Override
	public List<Order> showOrders(int uid) throws NoOrderFoundException {
		
		List<Order> orders = oRepo.findAllByUserUid(uid);
		return orders;
	}
	
	
	
	
	
	

	
	
	
	
	
	
	
}
