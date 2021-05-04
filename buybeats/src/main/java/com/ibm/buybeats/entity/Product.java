package com.ibm.buybeats.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * This class represents Product
 * @author Neha
 * @author Arya P Menon
 * @version 1.0
 */

@Entity
@Table(name = "product")
public class Product {
	
	@Id
	@GeneratedValue
	private int pid;
	
	@Column(length = 20)
	private String productName;
	
	@Column(length = 20)
	private String brand;
	
	@Column
	private double price;
	
	@Column
	private int stock;
	
//	@Column
//	private String images;
	
	@Column(length = 20)
	private String category;
	
	@Column(length = 20)
	private String colour;
	
	@Column
	private float size;
	
	@Column(length = 30)
	private String bodyMaterial;
	
	@Column(length = 30)
	private String stringMaterial;
	
	public int getPid() {
		return pid;
	}
	
	public void setPid(int pid) {
		this.pid = pid;
	}
	
	public String getProductName() {
		return productName;
	}
	
	public void setProductName(String productName) {
		this.productName = productName;
	}
	
	public String getBrand() {
		return brand;
	}
	
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	public double getPrice() {
		return price;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}
	
	public int getStock() {
		return stock;
	}
	
	public void setStock(int stock) {
		this.stock = stock;
	}
	
	public String getCategory() {
		return category;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}
	
	public String getColour() {
		return colour;
	}
	
	public void setColour(String colour) {
		this.colour = colour;
	}
	
	public float getSize() {
		return size;
	}
	
	public void setSize(float size) {
		this.size = size;
	}
	
	public String getBodyMaterial() {
		return bodyMaterial;
	}
	
	public void setBodyMaterial(String bodyMaterial) {
		this.bodyMaterial = bodyMaterial;
	}
	
	public String getStringMaterial() {
		return stringMaterial;
	}
	
	public void setStringMaterial(String stringMaterial) {
		this.stringMaterial = stringMaterial;
	}

//	public String getImages() {
//		return getImages();
//	}
//
//	public void setImages(String images) {
//		this.images = images;
//	}

//	public List<Wish> getWishes() {
//		return wishes;
//	}
//
//	public void setWishes(List<Wish> wishes) {
//		this.wishes = wishes;
//	}
//
//	public List<Cart> getCarts() {
//		return carts;
//	}
//
//	public void setCarts(List<Cart> carts) {
//		this.carts = carts;
//	}
	
	

	
}
