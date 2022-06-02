package com.payamd.service;
import java.util.List;

import com.payamd.entity.TransactionDetails;

public interface TransactionDetailsService {
	List<TransactionDetails>get(); 
	String addTransaction(TransactionDetails transaction);
}
