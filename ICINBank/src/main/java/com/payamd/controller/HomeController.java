package com.payamd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.payamd.entity.User;
import com.payamd.service.UserService;

@RestController
@RequestMapping("/api")
public class HomeController {

	@Autowired
	UserService userService;
	
		@GetMapping("/")
		public String home() {
			return "redirect:/index";
		}
	
		@GetMapping("/index")
		public String index() {
			return "index";
		}

		
//	    //    LOGIN
	    @PostMapping(path="/login")
	    public @ResponseBody ResponseEntity<Object> login(@RequestBody User user) {
	        return userService.login(user);
	    }

	    //    SIGNUP

	    @PostMapping(path="/signup")
	    public @ResponseBody String signup(@RequestBody User user) {
	        return userService.addNewUser(user);
	    }
	
}
