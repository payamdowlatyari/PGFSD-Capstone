package com.payamd.service;
import java.util.List;

import com.payamd.entity.CheckBookRequest;
public interface CheckService {

	public String checkBookRequest(String accountNumber);
	public String isCheckBookRequested(String accountNumber);
	public String changeCheckBookStatus(String accountNumber);
	public List<CheckBookRequest> getPendingCheckBookRequests();
	public CheckBookRequest getCheckBookRequests(String accountNumber); 
}
