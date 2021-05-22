package com.ibm.buybeats.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * This class represents Cart
 * @author Arya P Menon
 * @version 1.0
 */

@Entity
@Table(name ="Cart")
public class Cart {
	
	@Id
	@GeneratedValue
	private int entryID;
	
//	@JsonManagedReference(value = "product-cart")
	@ManyToOne
	@JoinColumn(name = "pid")
	private Product product;
	
	private int quantity;
	
	@JsonBackReference(value = "user-cart")
	@ManyToOne
	@JoinColumn(name = "uid")
	private User user;

	public int getEntryID() {
		return entryID;
	}
	public void setEntryID(int entryID) {
		this.entryID = entryID;
	}
	
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	

}
