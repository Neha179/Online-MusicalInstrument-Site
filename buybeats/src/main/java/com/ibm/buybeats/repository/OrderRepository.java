package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{

}
