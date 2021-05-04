package com.ibm.buybeats.service;

import org.springframework.mail.MailException;

import com.ibm.buybeats.entity.User;

public interface EmailService {

	int sendVerificationCode(User user) throws MailException;
	
	void sendConfirmationMail(User user,int oid) throws MailException;
	
	
}
