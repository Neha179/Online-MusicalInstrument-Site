package com.ibm.buybeats.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="WishList")
public class Wish {
	
	@Id
	@GeneratedValue
	private int wishId;
	
	private int uid;
	
	private int pid;
	
	public Wish() {}
	
	
	public Wish(int wishId, int uid, int pid) {
		this.wishId = wishId;
		this.uid = uid;
		this.pid = pid;
	}


	public int getWishId() {
		return wishId;
	}

	public void setWishId(int wishId) {
		this.wishId = wishId;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}
	
	

}
