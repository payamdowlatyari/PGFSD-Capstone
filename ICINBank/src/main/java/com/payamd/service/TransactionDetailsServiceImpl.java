package com.payamd.service;

import java.util.List;
import java.util.Date;
import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.entity.Account;
import com.payamd.entity.TransactionDetails;
import com.payamd.entity.Transfer;
import com.payamd.repository.AccountRepository;
import com.payamd.repository.TransactionDetailsRepository;

@Service(value="transactionDetails")
public class TransactionDetailsServiceImpl implements TransactionDetailsService{
	
	@Autowired
	TransactionDetailsRepository transactionDetailsRepository;
	
	@Autowired
	AccountRepository accountRepository;
	

	@Override
	public List<TransactionDetails> get() {
		return transactionDetailsRepository.findAll();
	}

	@Override
	public String addTransaction(TransactionDetails transaction) {
//		List<TransactionDetails> list = this.transactionDetailsRepository
//				.getTransactionsByAccountNumber(transaction.getAccountNumber());
		
//		String accountNumber = transaction.getAccountNumber();
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
			
			Date newDate = new Date();

//		TransactionDetails finalTransaction = 
//				new TransactionDetails(
//				transaction.getTid(), 
//				accountSender.getAccountNumber(), 
//				accountReceiver.getAccountNumber(), 
//				transaction.getMessage(),
//				newDate,  
//				transaction.getAmount());

		this.transactionDetailsRepository.save(transaction);
		return "Transfer details: " + message;
	}
}
