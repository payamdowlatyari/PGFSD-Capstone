package com.payamd.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.payamd.entity.TransactionDetails;
import com.payamd.entity.Transfer;
import com.payamd.repository.AccountRepository;
import com.payamd.repository.TransactionDetailsRepository;
import com.payamd.repository.TransferRepository;

@Service
public class TransferServiceImpl implements TransferService{

	@Autowired
	private TransferRepository transferRepository; 
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private TransactionDetailsRepository transactionDetailsRepository;
	
	@Override
	public List<Transfer> get() {
		return transferRepository.findAll();
	}
	
	@Override
	public String create(Transfer transfer, long id) {
		
        if (!accountRepository.findById(id).isPresent())  return "Account does not exist";
        
        Transfer t = new Transfer();
        t.setTid(transfer.getTid());
        t.setId((int)id);
        t.setSenderAccount(transfer.getSenderAccount());
        t.setReceiverAccount(transfer.getReceiverAccount());
        t.setAmount(transfer.getAmount());
        t.setDate(transfer.getDate());
        transferRepository.save(t);
        
        
        TransactionDetails td = new TransactionDetails();
        td.setTid(transfer.getTid());
        td.setAccountNumber(transfer.getSenderAccount());
        td.setToAccountNumber(transfer.getSenderAccount());
        td.setAmount(transfer.getAmount());
        td.setDate(transfer.getDate());
        transactionDetailsRepository.save(td);
        
        return "Transaction Completed";
    }

}
