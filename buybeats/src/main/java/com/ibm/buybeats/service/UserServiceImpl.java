package com.ibm.buybeats.service;

import org.jasypt.util.text.BasicTextEncryptor;
import org.jasypt.util.text.TextEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Address;
import com.ibm.buybeats.entity.CardDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.exception.InvalidCredentialsException;
import com.ibm.buybeats.repository.AddressRepository;
import com.ibm.buybeats.repository.CardDetailsRepository;
import com.ibm.buybeats.repository.UserRepository;

/**
 * This class provides services for User
 * @author Arya P Menon
 * @author Darshan Kansara
 * @version 1.0
 */


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
		BasicTextEncryptor key = new BasicTextEncryptor();
		key.setPassword("BuyBeats");
		String encryptedPassword = key.encrypt(u.getPassword());
		u.setPassword(encryptedPassword);
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
		if(!(user.getPassword().equals(u.getPassword()))){
			BasicTextEncryptor key = new BasicTextEncryptor();
			key.setPassword("BuyBeats");
			String encryptedPassword = key.encrypt(user.getPassword());
			u.setPassword(encryptedPassword);
		}
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
	public User login(Login login) throws InvalidCredentialsException {
		User user = userRepo.findByEmail(login.getEmail());
		if(user!=null) {
			BasicTextEncryptor key = new BasicTextEncryptor();
			key.setPassword("BuyBeats");
			String decryptedPassword = key.decrypt(user.getPassword());
			if(decryptedPassword.equals(login.getPassword()))
				return user;
		}
		throw new InvalidCredentialsException("Invalid Credentials");
	}
	


}
