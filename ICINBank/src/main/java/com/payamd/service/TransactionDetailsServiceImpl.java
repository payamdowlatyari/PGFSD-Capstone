package com.payamd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.entity.Account;
import com.payamd.entity.TransactionDetails;
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
		List<TransactionDetails> list = this.transactionDetailsRepository
				.getTransactionsByAccountNumber(transaction.getAccountNumber());
		double amount = 0;

//		for (Transfer temp : list) {
//			if (temp.getTransferStatus() == 0) {
//				if (temp.getFromAccountType().equals("Primary")) {
//					amount += temp.getTransferAmount();
//				}
//			}
//		}

//		Account accountSender = this.accountRepository.getOne(transaction.getAccountNumber());
//		Account accountReceiver = this.accountRepository.getOne(transaction.getToAccountNumber());
//
//		boolean check = false;
//		List<Account> accountsList = this.accountRepository.findAll();
//		for (Account temp : accountsList) {
//			if (temp.getAccountNumber().equals(transaction.getToAccountNumber())) {
//				check = true;
//			}
//		}
//		if (!check) {
//			return "Transfer bank account does not exists!";
//		}
//
//		Accounts myAccount = this.accountsRepository.getOne(transactions.getFromAccountNumber());
//		if (transactions.getFromAccountType().equals("Primary")) {
//			if (myAccount.getAccountBalancePrimary() - amountPrimary < transactions.getTransferAmount()) {
//				return "You already have some pending transactions!\nYour primary account would not have that much balance if these transactions are permitted!";
//			}
//		} else {
//			if (myAccount.getAccountBalanceSavings() - amountSavings < transactions.getTransferAmount()) {
//				return "You already have some pending transactions!\nYour savings account would not have that much balance if these transactions are permitted!";
//			}
//		}
//
//		Transactions finalTransaction = new Transactions(transactions.getFromAccountNumber(),
//				transactions.getToAccountNumber(), accountSender.getAccountHolderName(),
//				accountReceiver.getAccountHolderName(), transactions.getFromAccountType(),
//				transactions.getToAccountType(), transactions.getTransferAmount(), transactions.getTransferMessage(),
//				new Date(), transactions.getTransferStatus());
//
//		this.transactionsRepository.save(finalTransaction);
		return "Transfer initiated.\nCheck the status in the transactions tab!";
	}
}
