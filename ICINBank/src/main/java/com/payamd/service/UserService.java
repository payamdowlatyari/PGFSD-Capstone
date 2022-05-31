package com.payamd.service;

import java.util.List;
import com.payamd.entity.User;

public interface UserService {
	
	List<User> get();
	User get(Long id);
	User getUser(String username);
	User authenticate(String username, String password);
	String exists(String username, String password);
	String create(User user);
	String update(String password, String newPassword);
	
}
