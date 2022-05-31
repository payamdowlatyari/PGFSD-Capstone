package com.payamd.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.entity.CheckBookRequest;
import com.payamd.repository.CheckBookRequestRepository;

@Service(value="checkBookRequest")
public class CheckServiceImpl implements CheckService{
	
	@Autowired
	private CheckBookRequestRepository checkBookRequestRepository;

	@Override
	public String changeCheckBookStatus(String accountNumber) {
		List<CheckBookRequest> list = this.checkBookRequestRepository.findAll();
		for(CheckBookRequest temp : list) {
			if(temp.getAccountNumber().equals(accountNumber)) {
				if(temp.getStatus() == 0) {
					this.checkBookRequestRepository.updateCheckBookStatus(1, accountNumber);
				}
			}
		}
		return "Check Book Request Accepted!";
	}

	@Override
	public List<CheckBookRequest> getPendingCheckBookRequests() {
		return this.checkBookRequestRepository.getPendingCheckBookRequests(0);
	}
	
	@Override
	public String isCheckBookRequested(String accountNumber, String accountType) {
		List<CheckBookRequest> list = this.checkBookRequestRepository.findAll();
		for(CheckBookRequest temp : list) {
			if(temp.getAccountNumber().equals(accountNumber) && temp.getAccountType().equals(accountType)) {
				if(temp.getStatus() == 0) {
					return "Already Requested!";
				}
			}
		}
		return "No pending requests";
	}
	
	@Override
	public String checkBookRequest(String accountNumber, String accountType) {
		if(isCheckBookRequested(accountNumber, accountType).equals("No pending requests")) {
			CheckBookRequest check = new CheckBookRequest();
			check.setAccountNumber(accountNumber);
			check.setAccountType(accountType);
			check.setDate(new Date());
			check.setStatus(0);
			this.checkBookRequestRepository.save(check);
			return "Requested for a check book for account number - "+accountNumber;
		} 
		return "There is already a pending request for - "+accountNumber;
	}
	
	

}
