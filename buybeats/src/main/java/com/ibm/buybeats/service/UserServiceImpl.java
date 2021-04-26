package com.ibm.buybeats.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.entity.Address;
import com.ibm.buybeats.entity.CardDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepo;

	@Override
	public User saveUser(User u) throws EmailAlreadyExistsException {
		userRepo.save(u);
		return u;
	}

	@Override
	public User updateUser(User uid) {
		return null;
	}

	@Override
	public User viewProfile(String email) {
		return null;
	}

	@Override
	public Address addAddress(User uid) {
		return null;
	}

	@Override
	public CardDetails addCard(User uid) {
		return null;
	}

	@Override
	public User login(User uid) {
		return null;
	}

}
