package com.payamd.service;

import java.util.List;
import com.payamd.entity.User;

public interface UserService {
	
	List<User> get();

	User authenticate(String username, String password);

	void updateUser(User user);
	
	boolean isAdmin(User user);
}
