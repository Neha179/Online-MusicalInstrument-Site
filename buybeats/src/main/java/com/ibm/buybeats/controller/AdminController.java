package com.ibm.buybeats.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.exception.EmailAlreadyExistsException;
import com.ibm.buybeats.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@PostMapping(value="/login", consumes = "application/jsom")
	public  String adminLogin(@RequestBody User u) {
		try {
			adminService.login(u);
			return "Welcome Admin";
		} catch (EmailAlreadyExistsException e) {
			e.printStackTrace();
			return "Not valid Email ID";
		}
	}
	

}
