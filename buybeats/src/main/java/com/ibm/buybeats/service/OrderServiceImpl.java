package com.ibm.buybeats.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
import com.ibm.buybeats.repository.AddressRepository;
import com.ibm.buybeats.repository.CardDetailsRepository;
import com.ibm.buybeats.repository.CartRepository;
import com.ibm.buybeats.repository.OrderDetailsRepository;
import com.ibm.buybeats.repository.OrderRepository;
import com.ibm.buybeats.repository.UserRepository;



@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private OrderDetailsRepository orderDetailsRepo;
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private AddressRepository addressRepo;
	
	@Autowired
	private CartRepository cartRepo;
	
	@Override                       
	public Order placeOrder(int uid, int aid) throws StockNotAvaialble {
		Order order = new Order();
		User user = userRepo.findById(uid).get();
		order.setUser(user);
		user.getOrders().add(order);
		
		double totalAmount= 0;
		
		for(Cart cart : user.getCart()) {
			OrderDetails od = new OrderDetails();
			od.setOrder(order);
			od.setProduct(cart.getProduct());
			if(cart.getQuantity()>cart.getProduct().getStock())
				throw new StockNotAvaialble(cart.getProduct().getProductName() + " is out of stock ! Remove it from cart");
			cart.getProduct().setStock(cart.getProduct().getStock()-cart.getQuantity());
			od.setQuantity(cart.getQuantity());
			od.setPrice(cart.getProduct().getPrice());
			
			totalAmount = totalAmount + (od.getPrice()*od.getQuantity());
			
			order.getOrderDetails().add(od);
			orderDetailsRepo.save(od);
		}
		Address address = addressRepo.findById(aid).get();
		order.setAddress(address);
		order.setDateTime(LocalDateTime.now());
		order.setTotalAmount(totalAmount);
		//after payment need to check condition
		order.setPaymentStatus("S");
		for(Cart c : user.getCart()) {
			cartRepo.delete(c);
		}
		user.getCart().clear();
		return orderRepo.save(order);
	
	}
	
	

	@Override
	public List<Order> showOrders(int uid) throws NoOrderFoundException {
		
		List<Order> orders = userRepo.findById(uid).get().getOrders();
		if(orders.size()==0)
			throw new NoOrderFoundException("No orders found..!");
		else
			return orders;
	}



	@Override
	public List<OrderDetails> viewOrderDetails(int oid) {
	
		Order order = orderRepo.findById(oid).get();
		return order.getOrderDetails();
	}



	@Override
	public List<Address> viewAddress(int uid) throws NoAddressFound{
		List<Address> addresses = userRepo.findById(uid).get().getAddresses();
		if(addresses.size()==0)
			throw new NoAddressFound("No address found..!");
		else
			return addresses;
	}



	@Override
	public List<CardDetails> viewCard(int uid) throws NoCardsFound{
		List<CardDetails> cards = userRepo.findById(uid).get().getCardDetails();
		if(cards.size()==0)
			throw new NoCardsFound("No cards found..!");
		else
			return cards;
	}



//	@Override
//	public List<OrderDetails> confirmOrder(int uid, int oid) {
//		// TODO Auto-generated method stub
//		User user = userRepo.findById(uid).get();
//		Order order = orderRepo.findById(oid).get();
//		for(Cart cart : user.getCart()) {
//			OrderDetails orderDetails = new OrderDetails();
//			orderDetails.setOrder(order);
//			orderDetails.setProduct(cart.getProduct());
//			orderDetails.setPrice(cart.getProduct().getPrice());
//			orderDetails.setQuantity(cart.getQuantity());
//			user.getCart().remove(cart);
//			order.getOrderDetails().add(orderDetails);
//			cartRepo.delete(cart);
//			orderDetailsRepo.save(orderDetails);
//		}
//		return order.getOrderDetails();
//	}
	

	
	
}
