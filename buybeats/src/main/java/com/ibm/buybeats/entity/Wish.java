package com.ibm.buybeats.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name ="WishList")
public class Wish {
	
	@Id
	@GeneratedValue
	private int wishId;
	
	@JsonBackReference
	@OneToOne
	@JoinColumn(name = "uid")
	private User user;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "pid")
	private Product product;

	public int getWishId() {
		return wishId;
	}

	public void setWishId(int wishId) {
		this.wishId = wishId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}


}
