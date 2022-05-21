package com.payamd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.payamd.entity.User;
import com.payamd.service.UserService;

@RestController
@RequestMapping("/api/home")
public class HomeController {

	@Autowired
	UserService userService;
	
		@GetMapping("/")
		public String index() {
			return "index";
		}
	
		@PostMapping(value = "/userlogin")
	    public ModelAndView loginAction(
	    		 @RequestParam(value="username", required=true) String username,
	    		 @RequestParam(value="password", required=true) String password) 
	    {
	  		ModelAndView model = new ModelAndView("/dashboard"); 
	  		ModelAndView loginView = new ModelAndView("/login"); 
		  User user =  userService.authenticate(username, password);
		  if (user == null) { 
			  loginView.addObject("error", "user login failed");
			  return loginView;
		  }	
	        return model; 
	    }	  
	   
		@PostMapping(value = "/adminlogin")
	    public ModelAndView adminAction(
	    		 @RequestParam(value="username", required=true) String username,
	    		 @RequestParam(value="password", required=true) String password) 
	    {
	  		ModelAndView model = new ModelAndView("/dashboard"); 
	  		ModelAndView loginView = new ModelAndView("/login"); 
		  User admin =  userService.authenticate(username, password);
		  if (admin == null || userService.isAdmin(admin) == false) { 
			  loginView.addObject("error", "admin login failed");
			  return loginView;
		  }	
		  
	        return model; 
	    }	  
	
	
}
