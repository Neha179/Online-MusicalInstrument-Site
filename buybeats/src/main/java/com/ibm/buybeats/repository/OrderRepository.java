package com.ibm.buybeats.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Order;

/**
 * This is the repository of Order
 * @author Neha
 * @version 1.0
 */

public interface OrderRepository extends JpaRepository<Order, Integer>{

	List<Order> findAllByUserUid(int oid);

}
