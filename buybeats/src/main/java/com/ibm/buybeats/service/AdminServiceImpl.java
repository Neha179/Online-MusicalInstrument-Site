package com.ibm.buybeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.exception.InvalidCredentialsException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.repository.AdminRepository;
import com.ibm.buybeats.repository.ProductRepository;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private ProductRepository productRepo;

	@Override
	public Admin validateLogin(Login login)throws InvalidCredentialsException {
		Admin admin = adminRepo.findByEmailAndPassword(login.getEmail(), login.getPassword());
		if(admin != null) {
			return admin;
		}else throw new InvalidCredentialsException("Invalid Email ID or Password");
		
	}

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
//		Optional<Product> p=productRepo.findById(pid);
//		if(p ==null)
//			throw new ProductNotFoundException("Product Not Found");
//		else {
//		
//		}
		return null;
		
	}

	@Override
	public Optional<Product> findProductById(int pid) throws ProductNotFoundException {
		Optional<Product> product = productRepo.findById(pid);
		if(product == null)
			throw new ProductNotFoundException("Product Not Found");
		else
			return product;
	}

	@Override
	public Product findProductByName(String name)throws ProductNotFoundException {
		Product p = productRepo.findByProductName(name);
		if(p == null)
			throw new ProductNotFoundException("Product Not Found");
		else
			return p;
	}

	

}
