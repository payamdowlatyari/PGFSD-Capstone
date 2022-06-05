package com.payamd.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.entity.User;
import com.payamd.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	 @Autowired
	 private UserRepository userRepository;

	 @Override
		public List<User> get() {
			return userRepository.findAll();
		}
	 
	 @Override
		public User get(Long id) {		
				return userRepository.findById(id).get();
		}
	 
	 @Override
		public User getUser(String username) {
		 List <User> user = userRepository.findAll();
			
			for(User item: user)
			 if (item.getUsername().equals(username)) {			 
		            return item;
				 }   	
				return null;
		}
		
	 @Override
		public User authenticate(String username, String password) {
		List <User> user = userRepository.findAll();
		
		for(User item: user)
		 if (item.getUsername().equals(username) && item.getPassword().equals(password)) {			 
	            return item;
			 }   	
			return null;
		}
	 
	 @Override
		public String exists(String username, String password) {
		List <User> user = userRepository.findAll();
		
		for(User item: user)
		 if (item.getUsername().equals(username) && item.getPassword().equals(password)) {
			 
	            return "success";
			 } 	
			return "no-user";
		}
		
	 @Override
	    public String create(User user) {
	        User n = new User();
	        n.setFirstname(user.getFirstname());
	        n.setLastname(user.getLastname());
	        n.setUsername(user.getUsername());
	        n.setPassword(user.getPassword());
	        n.setAddress(user.getAddress());
	        n.setEmail(user.getEmail());
	        n.setPhone(user.getPhone());
	        n.setDob(user.getDob());

	        userRepository.save(n);

	        return "User created!";
	    }
	  
	 	@Override
		public String update(String password, String newPassword) {
		  	userRepository.updateUserPassword(newPassword, newPassword);
		  	return "Password updated!";
		}	
	 	
}



