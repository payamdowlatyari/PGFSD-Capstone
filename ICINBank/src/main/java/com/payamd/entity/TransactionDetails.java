package com.payamd.entity;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transactionDetails")
public class TransactionDetails {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tid")
    private long tid;
	
	@Column(name = "acc_no")
	private String acccountNumber;
	
	@Column(name = "to_acc")
	private String toAccountNumber;
	
	@Column(name = "action")
	private String action;
	
	@Column(name = "date")
	private Date date;
	
	
	public TransactionDetails() {}
	
	public TransactionDetails(long tid, String acccountNumber, String toAccountNumber, String action, Date date) {
		
		this.tid = tid;
		this.acccountNumber = acccountNumber;
		this.toAccountNumber = toAccountNumber;
		this.action = action;
		this.date = date;
	}
	

	public long getTid() {
		return tid;
	}

	public void setTid(long tid) {
		this.tid = tid;
	}

	public String getAccountNumber() {
		return acccountNumber;
	}

	public void setAccountNumber(String acccountNumber) {
		this.acccountNumber = acccountNumber;
	}

	public String getToAccountNumber() {
		return toAccountNumber;
	}

	public void setToAccountNumber(String toAccountNumber) {
		this.toAccountNumber = toAccountNumber;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
