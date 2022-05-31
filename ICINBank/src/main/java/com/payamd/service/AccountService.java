package com.payamd.service;

import com.payamd.entity.Account;
import com.payamd.entity.CheckBookRequest;

import java.util.List;

public interface AccountService {

	List<Account> get();
	String createNewAccount(Account account, long id);
	String updateAccount(Account account, long id);
	String deleteAccount(long id);
	String getStatus(long id);
}
