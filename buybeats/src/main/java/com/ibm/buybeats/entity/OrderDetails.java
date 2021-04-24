package com.ibm.buybeats.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class OrderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderDetailId;
	
	@ManyToOne
	@JoinColumn(name="oid")
	private Order oid;
	
	@ManyToOne
	@JoinColumn(name="pid")
	private Product pid;
	
	private double price;
	
	private int quantity;
	
	public OrderDetails() {
	}

	public OrderDetails(int orderDetailId, Order oid, Product pid, double price, int quantity) {
		super();
		this.orderDetailId = orderDetailId;
		this.oid = oid;
		this.pid = pid;
		this.price = price;
		this.quantity = quantity;
	}

	public int getOrderDetailId() {
		return orderDetailId;
	}

	public void setOrderDetailId(int orderDetailId) {
		this.orderDetailId = orderDetailId;
	}

	public Order getOid() {
		return oid;
	}

	public void setOid(Order oid) {
		this.oid = oid;
	}

	public Product getPid() {
		return pid;
	}

	public void setPid(Product pid) {
		this.pid = pid;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	

}
