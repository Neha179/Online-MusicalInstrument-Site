package com.ibm.buybeats.service;

import java.security.SecureRandom;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.ibm.buybeats.entity.Order;
import com.ibm.buybeats.entity.OrderDetails;
import com.ibm.buybeats.entity.User;
import com.ibm.buybeats.repository.OrderDetailsRepository;
import com.ibm.buybeats.repository.OrderRepository;

/**
 * This class provides services for Email
 * @author Darshan Kansara
 * @version 1.0
 */

@Service
public class EmailServiceImpl implements EmailService {
	
	
	
	@Autowired 
	OrderRepository orderRepo;
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public EmailServiceImpl(JavaMailSender javaMailSender)
	{
		this.javaMailSender=javaMailSender;
	}
	

	@Override
	public int sendVerificationCode(User user) throws MailException {
		// TODO Auto-generated method stub
		
		SimpleMailMessage mail= new SimpleMailMessage();
		SecureRandom random = new SecureRandom();
		int num = random.nextInt(100000);
		mail.setTo(user.getEmail());
		mail.setFrom("testmaildaamn@gmail.com");
		mail.setSubject("Verfication code for payment of the order");
		mail.setText("your code is "+num+" for your order");
		javaMailSender.send(mail);
		return num;
		
		
	}

	@Override
	public void sendConfirmationMail(User user,int oid) throws MailException {
		
		// TODO Auto-generated method stub
		
		Order order=orderRepo.findById(oid).get();
		
		SimpleMailMessage mail= new SimpleMailMessage();
		
		mail.setTo(user.getEmail());
		mail.setFrom("testmaildaamn@gmail.com");
		mail.setSubject("OrderDetails");
		String message="your order details are here \n";
		String details="Total Amount is : ₹ "+order.getTotalAmount()+"\n order is placed on "+order.getDateTime()+" \n Will be delivered at : \n"+order.getAddress().toString();
		
		mail.setText(message+details);
		
		javaMailSender.send(mail);
	}


	
	

}
