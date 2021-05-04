package com.ibm.buybeats.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * This class represents Card
 * @author Arya P Menon
 * @version 1.0
 */

@Entity
public class CardDetails {
	@Id
	@GeneratedValue
	private int cid;
	
	@Column(length = 16)
	private String cardNumber;

	@Column(length = 3)
	private int cvv;

	@Column()
	private LocalDate expDate;

	@JsonBackReference(value = "user-carddetails")
	@ManyToOne
	@JoinColumn(name = "uid")
	private User user;

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	public LocalDate getExpDate() {
		return expDate;
	}

	public void setExpDate(LocalDate expDate) {
		this.expDate = expDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


}
