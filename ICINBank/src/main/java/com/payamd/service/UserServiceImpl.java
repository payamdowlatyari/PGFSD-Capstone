package com.payamd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.repository.UserRepository;
import com.payamd.entity.User;

@Service
public class UserServiceImpl implements UserService{
	
	
	 @Autowired
	 private UserRepository userRepository;

	 @Override
		public List<User> get() {
			return userRepository.findAll();
		}
		
	 @Override
		public User authenticate(String username, String password) {
			
		List <User> user = userRepository.findAll();
		
		for(User item: user)
			
		 if (item.getEmail().equals(username) && item.getPassword().equals(password)) {	
			 
	            return item;
			 }   
		
			return null;
		}
		
	 @Override
		public void updateUser(User user) {
		  	userRepository.save(user);			
		}

		public List<User> getAllUsers() {
		 return userRepository.findAll();
		}

		@Override
		public boolean isAdmin(User user) {
			if (user.getType().equalsIgnoreCase("admin")) {
				return true;
			}
			return false;
		}	 
}



