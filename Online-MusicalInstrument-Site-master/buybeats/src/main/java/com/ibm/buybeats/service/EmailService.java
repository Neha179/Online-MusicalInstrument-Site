package com.ibm.buybeats.service;

import org.springframework.mail.MailException;

import com.ibm.buybeats.entity.User;

/**
 * This interface has services for Email
 * @author Darshan Kansara
 * @version 1.0
 */

public interface EmailService {

	int sendVerificationCode(User user) throws MailException;
	
	void sendConfirmationMail(User user,int oid) throws MailException;
	
	
}
