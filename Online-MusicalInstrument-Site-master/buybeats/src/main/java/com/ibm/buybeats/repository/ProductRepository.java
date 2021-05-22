package com.ibm.buybeats.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Product;

/**
 * This is the repository of Product
 * @author Neha
 * @version 1.0
 */

public interface ProductRepository extends JpaRepository<Product, Integer>{

	List<Product> findByProductName(String productName);

}
