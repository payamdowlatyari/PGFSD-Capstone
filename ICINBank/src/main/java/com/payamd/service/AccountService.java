package com.payamd.service;

import com.payamd.entity.Account;
import java.math.*;
import java.util.List;

public interface AccountService {

	List<Account> get();
	Account getAccount(String accountNumber);
	String createNewAccount(Account account, long id);
	String updateAccount(Account account, long id);
	String deleteAccount(long id);
	String getStatus(long id);
	String updateBalance(String accountNumber, BigDecimal balance);
}
