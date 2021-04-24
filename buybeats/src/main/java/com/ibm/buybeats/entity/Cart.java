package com.ibm.buybeats.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="Cart")
public class Cart {
	
	@Id
	@GeneratedValue
	private int entryID;
	
	private int pid;
	
	private int quantity;
	
	private int uid;
	
	public Cart() {}
	
	
	public Cart(int entryID, int pid, int quantity, int uid) {
		this.entryID = entryID;
		this.pid = pid;
		this.quantity = quantity;
		this.uid = uid;
	}


	public int getEntryID() {
		return entryID;
	}
	public void setEntryID(int entryID) {
		this.entryID = entryID;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	

}
