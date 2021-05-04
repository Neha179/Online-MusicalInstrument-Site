package com.ibm.buybeats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.buybeats.entity.User;

/**
 * This is the repository of User
 * @author Neha
 * @version 1.0
 */

public interface UserRepository extends JpaRepository<User, Integer>{
		public User findByEmailAndPassword(String email,String password);
		
		public User findByEmail(String email);
		
		

}
