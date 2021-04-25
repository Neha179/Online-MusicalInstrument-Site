package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer>{

}
