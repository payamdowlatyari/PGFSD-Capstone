package com.payamd.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.payamd.entity.TransactionDetails;

public interface TransactionDetailsService {
	List<TransactionDetails>get(); 
	String addTransaction(TransactionDetails transaction);
	List<TransactionDetails>getById(String id); 
	
}
