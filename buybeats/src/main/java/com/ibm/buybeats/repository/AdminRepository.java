package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	Admin findByEmailAndPassword(String email, String Password);

}
