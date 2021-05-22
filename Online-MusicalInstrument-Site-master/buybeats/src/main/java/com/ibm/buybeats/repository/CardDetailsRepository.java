package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.CardDetails;

/**
 * This is the repository of Card
 * @author Neha
 * @version 1.0
 */

public interface CardDetailsRepository extends JpaRepository<CardDetails, Integer>{

}
