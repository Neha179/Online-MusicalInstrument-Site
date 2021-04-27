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
		User user = userRepo.findByEmail(u.getEmail());
		if(user==null)
			return userRepo.save(u);
		else throw new EmailAlreadyExistsException("User already exists. Change your email!");
	}

	@Override
	public User updateUser(User user) {
		User u = userRepo.findByEmail(user.getEmail());
		u.setFirstName(user.getFirstName());
		u.setLastName(user.getLastName());
		u.setPhoneNumber(user.getPhoneNumber());
		u.setPassword(user.getPassword());
		return userRepo.save(u);
	}

	@Override
	public User viewProfile(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public Address addAddress(User user) {
		return null;
	}

	@Override
	public CardDetails addCard(User user) {
		return null;
	}

	@Override
	public User login(User user) {
		return null;
	}

}
