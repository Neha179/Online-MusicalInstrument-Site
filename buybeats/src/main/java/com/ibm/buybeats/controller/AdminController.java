package com.ibm.buybeats.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.bean.Login;
import com.ibm.buybeats.entity.Admin;
import com.ibm.buybeats.entity.Product;
import com.ibm.buybeats.exception.ProductNotFoundException;
import com.ibm.buybeats.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> validateLogin(@RequestBody Login login, HttpSession session) {
        Admin admin = adminService.validateLogin(login);
        if (admin != null) {
            session.setAttribute("ADMIN", admin);
            return new ResponseEntity<Admin>(HttpStatus.OK);
        } else
            return new ResponseEntity<String>("Invalid Credentilas", HttpStatus.NOT_FOUND);

    }

    @PostMapping(value = "/add/Product", consumes = "application/json")
    public String addProduct(@RequestBody Product product) {
        Product p = adminService.saveProduct(product);
        return "Product " + p.getProductName() + " added with " + p.getPid();

    }

    @PostMapping(value="/update/product/{pid}", consumes = "application/json" )    
    public String updateProduct(@PathVariable int pid, @RequestBody Product p) {
        try {
            adminService.updateProduct(pid);
            return "Product is updated";
        } catch (ProductNotFoundException e) {
            e.printStackTrace();
            return " PRoduct not found";
        }
    }

    @GetMapping(value = "/search/product/{pid}", produces = "application/json")
    public Product searchProduct(@PathVariable int pid) {
        try {
            return adminService.findProductById(pid);
        } catch (ProductNotFoundException e) {
            e.printStackTrace();
            return null;
        }

    }
    
    @GetMapping(value = "/search/product/name/{name}", produces = "application/json")
    public List<Product> findProductByName(@PathVariable("name") String productName) {
        try {
            return adminService.findProductByName(productName);
        } catch (ProductNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }

}