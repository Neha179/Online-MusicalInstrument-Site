package com.ibm.buybeats.service;

import com.ibm.buybeats.entity.Address;
import com.ibm.buybeats.entity.CardDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;

public interface UserService {
	
	User saveUser(User u) throws EmailAlreadyExistsException;
	
	User updateUser(User uid);
	
	User viewProfile(String email);
	
	Address addAddress(User uid);
	
	CardDetails addCard(User uid);
	
	User login(User uid);
	
	
}
