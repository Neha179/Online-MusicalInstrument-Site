package com.ibm.buybeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
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
	public Admin validateLogin(Login login){
		return adminRepo.findByEmailAndPassword(login.getEmail(), login.getPassword());
		
	}

	public Product saveProduct(Product p) {
		Product product =productRepo.save(p);
		return product;

	}

	@Override
	public List<Product> showProduct(Product p) {
		return productRepo.findAll();
	}

	@Override
	public Product updateProduct(int pid) throws ProductNotFoundException {
		Product p=productRepo.getOne(pid);
		if(p ==null)
		throw new ProductNotFoundException("Product Not Found");
		else {
			p.setColour(p.getColour());
			p.setBrand(p.getBrand());
			p.setCategory(p.getCategory());
			p.setPrice(p.getPrice());
			p.setSize(p.getSize());
			p.setStock(p.getStock());
			return p;
			}
			//return null;
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
	public List<Product> findProductByName(String productName)throws ProductNotFoundException {
		List<Product> p = productRepo.findByProductName(productName);
		if(p == null)
			throw new ProductNotFoundException("Product Not Found");
		else
			return p;
	}

	

}
