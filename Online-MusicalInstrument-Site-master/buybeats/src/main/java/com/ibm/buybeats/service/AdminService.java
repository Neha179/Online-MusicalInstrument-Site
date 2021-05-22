package com.ibm.buybeats.service;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.exception.InvalidCredentialsException;
import com.ibm.buybeats.exception.ProductNotFoundException;
import java.util.List;

/**
 * This interface has services for Admin
 * @author Aakansha Arora
 * @version 1.0
 */

public interface AdminService {
	
	 Product saveProduct(Product p);
	    
	    List<Product> showProduct(Product p);
	    
	    Product updateProduct(Product product) throws ProductNotFoundException;

	    Admin validateLogin(Login login) throws InvalidCredentialsException;
	    
	    Product findProductById(int pid) throws ProductNotFoundException;
	    
	    List<Product> findProductByName(String productName) throws ProductNotFoundException;
	    
	    List<Product> getProducts();

}
