package com.payamd.service;

import java.util.List;
import java.util.Date;
import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.entity.Account;
import com.payamd.entity.TransactionDetails;
import com.payamd.repository.AccountRepository;
import com.payamd.repository.TransactionDetailsRepository;

@Service
public class TransactionDetailsServiceImpl implements TransactionDetailsService{
	
	@Autowired
	private TransactionDetailsRepository transactionDetailsRepository;
	
	@Autowired
	private AccountRepository accountRepository;
	

	@Override
	public List<TransactionDetails> get() {
		return transactionDetailsRepository.findAll();
	}

	@Override
	public String addTransaction(TransactionDetails transaction) {

		AccountService accountService = null;
		
		String message = "";

		 List <Account> accounts = accountRepository.findAll();
		 Account accountSender = new Account();
		 Account accountReceiver = new Account();
		 BigDecimal balance, newBalance;
		 BigDecimal receiverBalance, newReceiverBalance;
		 BigDecimal amount = transaction.getAmount();

			for(Account item: accounts) {
				if (item.getAccountNumber().equals(transaction.getAccountNumber())) {			 
					accountSender = item;
					balance = item.getBalance();
					int res = amount.compareTo(balance);
					
					if (res == 1) {
						return  "Account does not have sufficient funds!";
					} else {
						newBalance = balance.subtract(amount);
						message = accountService.updateBalance(accountSender.getAccountNumber(), newBalance);
					}
					
				} 
				if (item.getAccountNumber().equals(transaction.getToAccountNumber())) {
					accountReceiver = item;
					receiverBalance = item.getBalance();
					newReceiverBalance = receiverBalance.add(amount);
					message = accountService.updateBalance(accountReceiver.getAccountNumber(), newReceiverBalance);
				} else {
					return "Transfer bank account does not exists!";

				}
			}
			
			TransactionDetails finalTransaction = new TransactionDetails();
			
			Date newDate = new Date();

		 finalTransaction.setAccountNumber(accountSender.getAccountNumber()); 
		 finalTransaction.setToAccountNumber(accountReceiver.getAccountNumber());
		 finalTransaction.setAmount(amount);
		 finalTransaction.setMessage(transaction.getMessage());
		 finalTransaction.setTid(0);
		 finalTransaction.setDate((java.sql.Date) newDate);
				

		this.transactionDetailsRepository.save(finalTransaction);
		return "Transfer details: " + message;
	}

	@Override
	public List<TransactionDetails> getById(String id) {
		return transactionDetailsRepository.getTransactionsByAccountNumber(id);
	}
}
