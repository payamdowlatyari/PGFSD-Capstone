package com.payamd.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="account")
public class Account {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	
	@Column(name = "acc_no")
    private String accountNumber;
	
	@Column(name = "acc_type")
    private String accountType;
	
	@Column(name = "balance")
    private BigDecimal balance;

    public Account() {
    	
    }
    
    public Account(long id, String accountNumber, BigDecimal balance, String accountType) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
    }
    
    public Account(long id, BigDecimal balance, String accountType) {
        this.id = id;
        this.accountNumber = "10" + id;
        this.balance = balance;
        this.accountType = accountType;
    }

    public Account(String accountNumber, BigDecimal balance, String accountType) {

        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	
	@Override
	public String toString() {
		return "Account [accountNumber=" + accountNumber + 
				 ", balance=" + balance + ", accountType=" + accountType + "]";
	}
}
