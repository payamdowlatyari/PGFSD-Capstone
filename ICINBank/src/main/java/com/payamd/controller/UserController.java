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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.payamd.entity.CheckBookRequest;
import com.payamd.entity.Message;
import com.payamd.entity.User;
import com.payamd.service.CheckService;
import com.payamd.service.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:8080")
public class UserController {

	@Autowired
	private UserService userService; 
	
	@Autowired
	private CheckService checkService;
	
	   @GetMapping("/list")
	    public ResponseEntity<List<User>> getUserList() {
	        List<User> users =  userService.get();
	        return new ResponseEntity<>(users, HttpStatus.OK);
	   }
	   
	   @GetMapping("/exists/{username}/{password}")
		public Message checkUserByCredentials(@PathVariable String username, @PathVariable String password) {
			Message message = new Message(this.userService.exists(username, password));
			return message;
		}
	   
	   @GetMapping("/username/{username}")
		public User getUserByUsername(@PathVariable String username) {
			return this.userService.getUser(username);
		}
	   
//	   @PostMapping("/{username}")
//		public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
//		   User user = this.userService.getUser(username);
////			return this.usersService.getUserViaUserId(loginUserId);
//		   return new ResponseEntity<User>(user, HttpStatus.OK);
//
//		}
			
	  
	   @GetMapping("/update/password/{newPassword}/{accountNumber}")
		public Message updateLoginPassword(@PathVariable String newPassword, @PathVariable String accountNumber) {
			Message message = new Message(this.userService.update(newPassword, accountNumber));
			return message;
		}
	   
	   @PostMapping("/create")
		public Message createUser(@RequestBody User user) {
			return new Message(this.userService.create(user));
			
		}
	   
	   @PostMapping("/checkrequest")
		public Message requestCheckBook(@RequestBody String accountNumber) {
			return new Message(this.checkService.checkBookRequest(accountNumber));
			
		}
	   
	   @PostMapping("/signup")
		public ResponseEntity<?> signupUser(@RequestBody String firstname, String lastname, String username, String password) {
			URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/signup").toUriString());
			
		   User savedUser = userService.getUser(username);
			if (savedUser != null) {
				return ResponseEntity.created(uri).body(savedUser);
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Error("Username already exists!"));
			}	
		}
	  
}
