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
	private String accountNumber;
	
	@Column(name = "to_acc")
	private String toAccountNumber;
	
	@Column(name = "message")
	private String message;
	
	@Column(name = "amount")
	private BigDecimal amount;
	
	@Column(name = "date")
	private Date date;
	
	
	public TransactionDetails() {}
	
	public TransactionDetails(long tid, String accountNumber, String toAccountNumber, String message, BigDecimal amount, Date date) {
		
		this.tid = tid;
		this.accountNumber = accountNumber;
		this.toAccountNumber = toAccountNumber;
		this.message = message;
		this.date = date;
		this.amount = amount;
	}
	

	
	public long getTid() {
		return tid;
	}

	public void setTid(long tid) {
		this.tid = tid;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getToAccountNumber() {
		return toAccountNumber;
	}

	public void setToAccountNumber(String toAccountNumber) {
		this.toAccountNumber = toAccountNumber;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String action) {
		this.message = action;
	}
	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}


	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	@Override
	public String toString() {
		return "transactionDetails [id="+ tid +", sender=" + accountNumber + ", receiver=" + 
				toAccountNumber + ", message=" + message + ", date=" + 
				date + ", amount=" + amount + "]";
	}
}
