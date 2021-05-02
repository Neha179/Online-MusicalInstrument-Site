package com.ibm.buybeats.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int uid;

	@Column(length = 20)
	private String firstName;

	@Column(length = 20)
	private String lastName;

	@Column(length = 50)
	private String email;

	@Column(length = 10)
	private String phoneNumber;

	@Column(length = 50)
	private String password;

	@JsonManagedReference(value = "user-address")
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Address> addresses = new ArrayList<Address>();

	@JsonManagedReference(value = "user-carddetails")
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<CardDetails> cardDetails = new ArrayList<CardDetails>();

	@JsonManagedReference(value = "user-order")
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Order> orders = new ArrayList<Order>();

	@JsonManagedReference(value = "user-cart")
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER, orphanRemoval = true)
	private Set<Cart> cart = new HashSet<Cart>();

	@JsonManagedReference(value = "user-wish")
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER, orphanRemoval = true)
	private Set<Wish> wish = new HashSet<Wish>();

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}

	public List<CardDetails> getCards() {
		return cardDetails;
	}

	public void setCards(List<CardDetails> cardDetails) {
		this.cardDetails = cardDetails;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public List<CardDetails> getCardDetails() {
		return cardDetails;
	}

	public void setCardDetails(List<CardDetails> cardDetails) {
		this.cardDetails = cardDetails;
	}

	public Set<Cart> getCart() {
		return cart;
	}

	public void setCart(Set<Cart> cart) {
		this.cart = cart;
	}

	public Set<Wish> getWish() {
		return wish;
	}

	public void setWish(Set<Wish> wish) {
		this.wish = wish;
	}

}
