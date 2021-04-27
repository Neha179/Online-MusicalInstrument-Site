package com.ibm.buybeats.service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.exception.ProductNotFoundException;

public interface AdminService {
	
	String saveProduct(Product p);
	
	Product showProduct(Product p);
	
	Product updateProduct(Product p) throws ProductNotFoundException;

	User validateLogin(Login login);

}
