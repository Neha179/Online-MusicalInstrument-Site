package com.ibm.buybeats.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * This class represents Order
 * @author Arya P Menon
 * @author Darshan Kansara
 * @author Aakansha Arora
 * @version 1.0
 */

@Entity
@Table(name="order_table")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int oid;

	@JsonBackReference(value = "user-order")
	@ManyToOne
	@JoinColumn(name = "uid")
	private User user;

	private double totalAmount;

	private LocalDateTime dateTime;

	@Column(length = 10)
	private String paymentStatus;

	@JsonBackReference(value = "address-order")
	@ManyToOne
	@JoinColumn(name = "aid")
	private Address address;
	
	@JsonManagedReference(value = "order-orderdetails")
	@OneToMany(mappedBy = "order", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<OrderDetails> orderDetails = new ArrayList<OrderDetails>();

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


	public List<OrderDetails> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetails> orderDetails) {
		this.orderDetails = orderDetails;
	}

}
