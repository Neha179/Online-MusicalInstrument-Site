package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Wish;

/**
 * This is the repository of Wish
 * @author Neha
 * @version 1.0
 */

public interface WishRepository extends JpaRepository<Wish, Integer>{

}
