package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Cart;

/**
 * This is the repository of Cart
 * @author Neha
 * @version 1.0
 */

public interface CartRepository extends JpaRepository<Cart, Integer>{
	
}
