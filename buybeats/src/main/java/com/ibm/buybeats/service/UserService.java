package com.ibm.buybeats.service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Address;
import com.ibm.buybeats.entity.CardDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;

public interface UserService {
	
	User saveUser(User user) throws EmailAlreadyExistsException;
	
	User updateUser(User user);
	
	User viewProfile(String email);
	
	Address addAddress(Address address, String email);
	
	CardDetails addCard(CardDetails card, String email);
	
	User login(Login login);
	
	
	
	
	
	
}
