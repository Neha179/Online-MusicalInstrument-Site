package com.ibm.buybeats.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{

	List<Order> findAllByUserUid(int oid);

}
