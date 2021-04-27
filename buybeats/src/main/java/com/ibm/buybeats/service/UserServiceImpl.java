package com.ibm.buybeats.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Address;
import com.ibm.buybeats.entity.CardDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.repository.AddressRepository;
import com.ibm.buybeats.repository.CardDetailsRepository;
import com.ibm.buybeats.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private AddressRepository addressRepo;
	
	@Autowired
	private CardDetailsRepository cardRepo;

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
	public Address addAddress(Address address, String email) {
		User user = userRepo.findByEmail(email);
		user.getAddresses().add(address);
		address.setUser(user);
		return addressRepo.save(address);
	}

	@Override
	public CardDetails addCard(CardDetails card, String email) {
		User user = userRepo.findByEmail(email);
		user.getCards().add(card);
		card.setUser(user);
		return cardRepo.save(card);
	}

	@Override
	public User login(Login login) {
		return userRepo.findByEmailAndPassword(login.getEmail(),login.getPassword());
	}
	


}
