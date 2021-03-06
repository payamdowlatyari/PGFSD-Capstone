package com.payamd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.payamd.entity.Account;
import com.payamd.entity.CheckBookRequest;
import com.payamd.entity.TransactionDetails;
import com.payamd.service.AccountService;
import com.payamd.service.CheckService;
import com.payamd.service.TransactionDetailsService;

@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:8080")
public class AccountController {

	@Autowired
	private AccountService accountService;
	
	@Autowired
	private TransactionDetailsService transactionDetailsService;
	
	@Autowired
	private CheckService checkService;
	
	@GetMapping("/list")
    public ResponseEntity <List<Account>> getAccountsList() {       
        List<Account> accounts =  accountService.get();
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }
	
	@GetMapping("/accountnumber/{number}")
	public Account getaccountById(@PathVariable String number) {
		return this.accountService.getAccount(number);
	}
	
	@PostMapping("/{id}")
    public @ResponseBody String createNewAccount(@RequestBody Account account, @PathVariable long id) {
        return accountService.createNewAccount(account, id);
    }

    @PutMapping("/{id}")
    public @ResponseBody String updateAccount(@PathVariable long id, @RequestBody Account account) {
        return accountService.updateAccount(account, id);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody String deleteAccount(@PathVariable long id) {
        return accountService.deleteAccount(id);
    }
    
    @GetMapping("/transactions/{id}")
	public List<TransactionDetails> getTransactionsById(@PathVariable String id) {
		return this.transactionDetailsService.getById(id);
	}
    
    @GetMapping("/checkbook/{accountNumber}")
   	public ResponseEntity <CheckBookRequest> getCheckBookRequests(@PathVariable String accountNumber)
    {
    	CheckBookRequest checkbook = checkService.getCheckBookRequests(accountNumber);
   		return new ResponseEntity<CheckBookRequest>(checkbook, HttpStatus.OK);
   	}
}
