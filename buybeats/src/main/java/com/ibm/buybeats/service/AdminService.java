package com.ibm.buybeats.service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.exception.InvalidCredentialsException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import java.util.List;


public interface AdminService {
	
	String saveProduct(Product p);
	
	List<Product> showProduct(Product p);
	
	Product findByPid(int pid);
	
	List<Product> findByName(String name);
	
	Product updateProduct(int pid) throws ProductNotFoundException;

	Admin validateLogin(Login login) throws InvalidCredentialsException;

}
