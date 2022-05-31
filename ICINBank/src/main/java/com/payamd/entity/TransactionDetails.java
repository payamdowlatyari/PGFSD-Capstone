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
	
	@Column(name = "form")
	private String form;
	
	@Column(name = "action")
	private String action;
	
	@Column(name = "to_date")
	private Date toDate;
	
	
	public TransactionDetails() {}
	
	public TransactionDetails(long tid, String acccountNumber, String form, String action, Date toDate) {
		
		this.tid = tid;
		this.acccountNumber = acccountNumber;
		this.form = form;
		this.action = action;
		this.toDate = toDate;
	}
	

	public long getTid() {
		return tid;
	}

	public void setTid(long tid) {
		this.tid = tid;
	}

	public String getAcccountNumber() {
		return acccountNumber;
	}

	public void setAcccountNumber(String acccountNumber) {
		this.acccountNumber = acccountNumber;
	}

	public String getForm() {
		return form;
	}

	public void setForm(String form) {
		this.form = form;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public Date getToDate() {
		return toDate;
	}

	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}
}
