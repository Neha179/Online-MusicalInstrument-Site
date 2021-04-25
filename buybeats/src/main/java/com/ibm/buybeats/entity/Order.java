package com.ibm.buybeats.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int oid;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "uid")
	private User user;

	private double totalAmount;

	private LocalDateTime dateTime;

	@Column(length = 10)
	private String paymentStatus;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "aid")
	private Address address;

	public Order() {
	}

	public Order(int oid, User user, double totalAmount, LocalDateTime dateTime, String paymentStatus,
			Address address) {
		super();
		this.oid = oid;
		this.user = user;
		this.totalAmount = totalAmount;
		this.dateTime = dateTime;
		this.paymentStatus = paymentStatus;
		this.address = address;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public LocalDateTime getDateTime() {
		return dateTime;
	}

	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}


}
