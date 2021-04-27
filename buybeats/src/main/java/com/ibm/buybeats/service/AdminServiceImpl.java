package com.ibm.buybeats.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.exception.InvalidCredentialsException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.repository.AdminRepository;
import com.ibm.buybeats.repository.ProductRepository;
import com.ibm.buybeats.repository.UserRepository;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private ProductRepository productRepo;

	@Override
	public String saveProduct(Product p) {
		productRepo.save(p);
		return "Product Added";
	}

	@Override
	public List<Product> showProduct(Product p) {
		return productRepo.findAll();
	}

	@Override
	public Product updateProduct(int pid) throws ProductNotFoundException {
		return null;
		
	}

	@Override
	public Admin validateLogin(Login login) throws InvalidCredentialsException {
		Admin admin = adminRepo.findByEmailAndPassword(login.getEmail(), login.getPassword());
		if(admin!=null)
			return admin;
		else throw new InvalidCredentialsException("Invalid Credentials");
	}

	@Override
	public Product findByPid(int pid) {
		return null;
	}

	@Override
	public List<Product> findByName(String name) {
		return null;
	}

	

}
