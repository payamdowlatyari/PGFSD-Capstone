package com.payamd.service;
import java.util.List;

import com.payamd.entity.CheckBookRequest;
public interface CheckService {

	public String checkBookRequest(String accountNumber, String accountType);
	public String isCheckBookRequested(String accountNumber, String accountType);
	public String changeCheckBookStatus(String accountNumber);
	public List<CheckBookRequest> getPendingCheckBookRequests();
}
