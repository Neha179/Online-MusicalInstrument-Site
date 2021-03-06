package com.ibm.buybeats.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * This class represents Wish
 * @author Arya P Menon
 * @version 1.0
 */

@Entity
@Table(name = "WishList")
public class Wish {

	@Id
	@GeneratedValue
	private int wishId;

	@JsonBackReference(value = "user-wish")
	@ManyToOne
	@JoinColumn(name = "uid")
	private User user;

//	@JsonManagedReference(value = "product-wish")
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
