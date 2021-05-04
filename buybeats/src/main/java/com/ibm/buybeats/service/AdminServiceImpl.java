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

/**
 * This class provides services for Admin
 * @author Aakansha Arora
 * @version 1.0
 */

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
    public Product updateProduct(Product product) throws ProductNotFoundException {
        Product p = productRepo.findById(product.getPid()).get();
        if(p == null)
        	throw new ProductNotFoundException("Product Not Found");
        else {
            p.setColour(product.getColour());
            p.setBrand(product.getBrand());
            p.setCategory(product.getCategory());
            p.setPrice(product.getPrice());
            p.setSize(product.getSize());
            p.setStock(product.getStock());
            return productRepo.save(p);
        }
    }
        
        

    @Override
    public Product findProductById(int pid) throws ProductNotFoundException {
        Product product = productRepo.findById(pid).get();
        if(product == null)
            throw new ProductNotFoundException("Product Not Found");
        else
            return product;
    }

    @Override
    public List<Product> findProductByName(String productName)throws ProductNotFoundException {
        List<Product> p = productRepo.findByProductName(productName);
        if(p.size() == 0)
            throw new ProductNotFoundException("Product Not Found");
        else
            return p;
    }


	

}
