package com.ibm.buybeats.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CardDetails {
	@Id
	@Column(length =16)
	private int cardNumber;
	
	@Column(length = 3)
	private int cvv;
	
	@Column()
	private LocalDate expDate;
	
	@ManyToOne
	@JoinColumn(name="uid")
	private User uid;
	

}
