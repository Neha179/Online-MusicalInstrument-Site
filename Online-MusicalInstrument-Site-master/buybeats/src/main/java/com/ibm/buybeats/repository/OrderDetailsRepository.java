package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;

/**
 * This is the repository of Order Details
 * @author Neha
 * @version 1.0
 */

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer>{

	public OrderDetails findByOrder(Order order);

}
