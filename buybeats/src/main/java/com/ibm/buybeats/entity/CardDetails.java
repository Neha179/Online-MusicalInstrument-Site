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
	@Column(length = 16)
	private int cardNumber;

	@Column(length = 3)
	private int cvv;

	@Column()
	private LocalDate expDate;

	@ManyToOne
	@JoinColumn(name = "uid")
	private User uid;

	public CardDetails() {
	}

	public CardDetails(int cardNumber, int cvv, LocalDate expDate, User uid) {
		super();
		this.cardNumber = cardNumber;
		this.cvv = cvv;
		this.expDate = expDate;
		this.uid = uid;
	}

	public int getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(int cardNumber) {
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

	public User getUid() {
		return uid;
	}

	public void setUid(User uid) {
		this.uid = uid;
	}

}
