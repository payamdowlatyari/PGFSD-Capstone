package com.payamd.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.payamd.entity.User;
import com.payamd.repository.UserRepository;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{
	
	 @Autowired
	 private UserRepository userRepository;

	 @Override
		public List<User> get() {
			return userRepository.findAll();
		}
	 
	 @Override
		public User getUser(String username) {
			return userRepository.findByUsername(username);
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
	    public String addNewUser(User user) {
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

//	        Account a = new Account();
//	        a.setId(user.getId());
//	        a.setAccountNumber(user.getId() + "1");
//	        a.setAccountType("Checking");
//	        a.setBalance(BigDecimal.valueOf(0));
//	        accountRepository.save(a);

	        return "new account created.";
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
		
		@Override
		public ResponseEntity<Object> login(User user) {
	        if (authenticate(user.getUsername(), user.getPassword()) != null) {
	            Map<Object, Object> model = new HashMap<>();
	            return new ResponseEntity<Object>(model, HttpStatus.OK);
	        } return new ResponseEntity<Object>(HttpStatus.UNAUTHORIZED);
	    }
		
//		@Override
//		public Boolean logoutUser(HttpServletRequest request, HttpServletResponse response) {
//			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//			SecurityContextLogoutHandler handler = null;
//			if (auth != null) {
//				handler = new SecurityContextLogoutHandler();
//				handler.logout(request, response, auth);
//			}
//			return handler.isInvalidateHttpSession();
//		}

		@Override
		public User getUserById(Long id) {
			
				return userRepository.getById(id);
		
		}
}



