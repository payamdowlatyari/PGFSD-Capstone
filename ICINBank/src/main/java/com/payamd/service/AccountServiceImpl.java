package com.payamd.service;

import java.util.List;
import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.entity.Account;
import com.payamd.entity.CheckBookRequest;
import com.payamd.entity.User;
import com.payamd.repository.AccountRepository;
import com.payamd.repository.CheckBookRequestRepository;
import com.payamd.repository.UserRepository;

@Service
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	private UserRepository userRepository;
	 
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private CheckBookRequestRepository checkBookRequestRepository;
	
	@Override
	 public List<Account> get() {
			return accountRepository.findAll();
	 }
	
	 @Override
		public Account getAccount(String accountNumber) {
		 List <Account> account = accountRepository.findAll();

			for(Account item: account)
			 if (item.getAccountNumber().equals(accountNumber)) {			 
		            return item;
				 }   	
				return null;
		}
//
	@Override
	public String createNewAccount(Account account, long id) {
        if (!userRepository.findById(id).isPresent())  return "User does not exist";

        Account n = new Account();
        n.setId(id);
        n.setBalance(BigDecimal.valueOf(0));
        n.setAccountNumber(account.getAccountNumber());
        n.setAccountType(account.getAccountType());
        accountRepository.save(n);
        return "Account Created";
    }
	
	@Override
	public String updateAccount(Account account, long id) {
        accountRepository.findById(id)
                .map(a -> {
                    a.setAccountNumber(account.getAccountNumber());
                    return accountRepository.save(a);
                });
        return "Account Update Successful";
    }

	@Override
    public String deleteAccount(long id) {
        accountRepository.deleteById(id);
        return "Account Deleted";
    }
	
	@Override
	public String getStatus(long id) {
		
		List<CheckBookRequest> list = checkBookRequestRepository.findAll();		
		for (CheckBookRequest item: list) {
			if(item.getId() == id) {
				String s = Integer.toString(item.getStatus());
				return s;
			}
		}
		
		return "no request was found!";
	}

	@Override
	public String updateBalance(String accountNumber, BigDecimal balance) {
		
		Account account = getAccount(accountNumber);
		account.setBalance(balance);		
		return updateAccount(account, account.getId());

	}

	 

}
