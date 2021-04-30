package com.ibm.buybeats.service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.exception.InvalidCredentialsException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import java.util.List;


public interface AdminService {
	
	 Product saveProduct(Product p);
	    
	    List<Product> showProduct(Product p);
	    
	    Product updateProduct(Product product) throws ProductNotFoundException;

	    Admin validateLogin(Login login);
	    
	    Product findProductById(int pid) throws ProductNotFoundException;
	    
	    List<Product> findProductByName(String productName) throws ProductNotFoundException;

}
