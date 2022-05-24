package com.payamd.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.payamd.entity.User;

public interface UserService {
	
	List<User> get();

	User authenticate(String username, String password);
	
	String addNewUser(User user);
	
	void updateUser(User user);
	
	boolean isAdmin(User user);
	
	ResponseEntity<Object> login(User user);
}
