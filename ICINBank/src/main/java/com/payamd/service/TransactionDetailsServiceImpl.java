package com.payamd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.payamd.entity.TransactionDetails;
import com.payamd.repository.TransactionDetailsRepository;

@Service(value="transactionDetails")
public class TransactionDetailsServiceImpl implements TransactionDetailsService{
	
	@Autowired
	TransactionDetailsRepository transactionDetailsRepository;

	@Override
	public List<TransactionDetails> get() {
		return transactionDetailsRepository.findAll();
	}

}
