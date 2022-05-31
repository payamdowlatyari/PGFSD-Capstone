package com.payamd.entity;

import java.util.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "checkBookRequest") 
public class CheckBookRequest {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
    private long id;
  
    @Column(name = "req_status")
    private int status;
    
    @Column(name = "acc_no")
    private String accountNumber;
    
    @Column(name = "acc_type")
    private String accountType;
    
    @Column(name = "no_pages")
    private String pages;
    
    @Column(name = "date")
    private Date date;
    
    
    public CheckBookRequest() {}
    
    public CheckBookRequest(long id, int status, String accountNumber, String accountType, String pages, Date date) {
    	
    	this.id = id;
    	this.accountNumber = accountNumber;
    	this.accountType = accountType;
    	this.status = status;
    	this.pages = pages;
    	this.date = date;
    }
    
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getPages() {
		return pages;
	}

	public void setPages(String pages) {
		this.pages = pages;
	}
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	

	@Override
	public String toString() {
		return "CheckBookRequest [accountNumber=" + accountNumber + ", accountType=" + 
				accountType + ", accountType=" + accountType + ", status=" + 
				status + ", pages=" + pages + "]";
	}
    
    
}
