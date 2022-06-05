package com.payamd.service;

import java.util.List;

import com.payamd.entity.Admin;

public interface AdminService {

	List<Admin> get();
	
	Admin get(Long id);
	String exists(String username, String password);
	Admin getAdmin(String username);
	Admin authenticate(String username, String password);

}
