package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Admin;

/**
 * This is the repository of Admin
 * @author Aakansha Arora
 * @version 1.0
 */


public interface AdminRepository extends JpaRepository<Admin, Integer>{
	Admin findByEmailAndPassword(String email, String Password);

}
