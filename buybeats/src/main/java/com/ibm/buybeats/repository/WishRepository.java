package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Wish;

public interface WishRepository extends JpaRepository<Wish, Integer>{

}
