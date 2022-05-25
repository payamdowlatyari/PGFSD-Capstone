package com.payamd.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.payamd.entity.User;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface UserService {
	
	List<User> get();
	
	User getUserById(Long id);
	
	User getUser(String username);

	User authenticate(String username, String password);
	
	String addNewUser(User user);
	
	void updateUser(User user);
	
	boolean isAdmin(User user);
	
//	Boolean logoutUser(HttpServletRequest request, HttpServletResponse response);
	
	ResponseEntity<Object> login(User user);
}
