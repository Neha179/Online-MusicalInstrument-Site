package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Address;

/**
 * This is the repository of Address
 * @author Neha
 * @version 1.0
 */

public interface AddressRepository extends JpaRepository<Address, Integer>{

}
