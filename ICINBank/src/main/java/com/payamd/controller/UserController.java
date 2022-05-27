package com.payamd.controller;

import java.util.List;
import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.payamd.entity.User;
import com.payamd.service.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:8080")
public class UserController {

	@Autowired
	private UserService userService; 
	
	   @GetMapping(value = "/list")
	    public ResponseEntity<List<User>> getUserList() {
	        List<User> users =  userService.get();
	        return new ResponseEntity<>(users, HttpStatus.OK);
	   }
	   
	   @GetMapping("/{id}")
		public ResponseEntity<User> getUserById(@PathVariable Long id) {
			User user = userService.getUserById(id);
			User frontUser = new User(user.getId(), user.getLastname(), user.getFirstname(), 
					user.getUsername(), user.getPassword(),user.getCurrency(), user.getType());
			return ResponseEntity.ok().body(frontUser);
	  }
	   
	   @GetMapping("/isAdmin/{id}")
		public ResponseEntity<Boolean> hasAdminPrivilege(@PathVariable Long id) {
		   	User user = userService.getUserById(id);
			return ResponseEntity.ok().body(userService.isAdmin(user));
		} 
	   
	   @PostMapping("/signup")
		public ResponseEntity<?> signupUser(@RequestBody String firstname, String lastname, String username, String password) {
			URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/signup").toUriString());
			
		   User savedUser = userService.getUser(username);
			if (savedUser != null) {
				return ResponseEntity.created(uri).body(savedUser);
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Error("Username already exists!"));
			}	
		}
	   
//	   @GetMapping("/logout")
//		public ResponseEntity<Boolean> logout(HttpServletRequest request, HttpServletResponse response) {
//			return ResponseEntity.ok().body(userService.logoutUser(request, response));
//		}	
	   
	  
}
