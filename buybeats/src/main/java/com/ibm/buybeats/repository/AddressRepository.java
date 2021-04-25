package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Integer>{

}
