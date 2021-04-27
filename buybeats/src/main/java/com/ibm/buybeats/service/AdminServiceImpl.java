package com.ibm.buybeats.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.repository.ProductRepository;
import com.ibm.buybeats.repository.UserRepository;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ProductRepository productRepo;

	@Override
	public User validateLogin(Login login) {
		return  userRepo.findByEmailAndPassword(login.getUsername(), login.getPassword());
	}

	@Override
	public String saveProduct(Product p) {
		return null;
	}

	@Override
	public Product showProduct(Product p) {
		return null;
	}

	@Override
	public Product updateProduct(Product p) throws ProductNotFoundException {
		return null;
	}


}
