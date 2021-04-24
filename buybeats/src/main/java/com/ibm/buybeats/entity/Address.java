package com.ibm.buybeats.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table
public class Address {
	
	@Id
	@GeneratedValue
	private int aid;
	@Column(length = 15)
	private String houseNumber;
	@Column(length = 15)
	private String street;
	@Column(length = 15)
	private String city;
	@Column(length = 15)
	private String state;
	private int pinCode;
	@Column(length = 15)
	private String addressType;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "uid")
	private User user;
	
	public Address() {

	}

	public Address(int aid, String houseNumber, String street, String city, String state, int pinCode,
			String addressType, User user) {
		super();
		this.aid = aid;
		this.houseNumber = houseNumber;
		this.street = street;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
		this.addressType = addressType;
		this.user=user;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getHouseNumber() {
		return houseNumber;
	}

	public void setHouseNumber(String houseNumber) {
		this.houseNumber = houseNumber;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPinCode() {
		return pinCode;
	}

	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public String getAddressType() {
		return addressType;
	}

	public void setAddressType(String addressType) {
		this.addressType = addressType;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}



}
