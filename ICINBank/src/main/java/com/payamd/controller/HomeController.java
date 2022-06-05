package com.payamd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.payamd.entity.Admin;
import com.payamd.entity.User;
import com.payamd.service.AdminService;
import com.payamd.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost"}, allowCredentials = "true")
public class HomeController {

	@Autowired
	UserService userService;
	
	@Autowired
	AdminService adminService; 
	
		@GetMapping("/")
		public String home() {
			return "redirect:/index";
		}
	
		@GetMapping("/index")
		public String index() {
			return "index";
		}
		
		@GetMapping("/logout")
	    public ResponseEntity<String> logout() 
	    {
		 return ResponseEntity.ok("login");
	    }
		
		@GetMapping("/adminlogout")
	    public ResponseEntity<String> adminLogout() 
	    {
		 return ResponseEntity.ok("login");
	    }
		
		
	    //    LOGIN
	    @PostMapping("/login")
	    public @ResponseBody ResponseEntity<Object> login(@RequestParam(value="username", required=true) String username,
	    		 @RequestParam(value="password", required=true) String password) 
	    {
	    	User user = userService.authenticate(username, password);

	    	if (user != null) {
	    		return ResponseEntity.ok(user);
	    	}
	    	
	    	else return null;
	    }
	    
	    //   ADMIN LOGIN
	    @PostMapping("/adminlogin")
	    public @ResponseBody ResponseEntity<Object> adminLogin(@RequestParam(value="username", required=true) String username,
	    		 @RequestParam(value="password", required=true) String password) 
	    {
	    	Admin admin = adminService.authenticate(username, password);

	    	if (admin != null) {
	    		return ResponseEntity.ok(admin);
	    	}
	    	
	    	else return null;
	    }
	    
	    
	
}
