package com.payamd.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
@Table(name = "transfer")
public class Transfer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tid")
    private long tid;
	
	@Column(name = "id")
	private long id;
	
	@Column(name = "sender_acc")
	private String senderAccount;
	
	@Column(name = "receiver_acc")
	private String receiverAccount;
	
	@Column(name = "amount")
	private BigDecimal amount;
	
	@Column(name = "date")
	private Date date;

   
    public long getTid() {
        return tid;
    }

    public void setTid(long tid) {
        this.tid = tid;
    }
    
    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSenderAccount() {
		return senderAccount;
	}

	public void setSenderAccount(String senderAccount) {
		this.senderAccount = senderAccount;
	}

	public String getReceiverAccount() {
		return receiverAccount;
	}

	public void setReceiverAccount(String receiverAccount) {
		this.receiverAccount = receiverAccount;
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

}
