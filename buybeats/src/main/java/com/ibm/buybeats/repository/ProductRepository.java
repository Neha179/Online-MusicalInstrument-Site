package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}
