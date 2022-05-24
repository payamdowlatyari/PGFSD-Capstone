package com.payamd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	   
	  
}
