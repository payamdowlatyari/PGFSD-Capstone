package com.payamd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.CookieValue;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletResponse;


import com.payamd.entity.User;
import com.payamd.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost"}, allowCredentials = "true")
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
		
		@GetMapping("/logout")
	    public ResponseEntity logout() 
	    {
		 return ResponseEntity.ok("login");
	    }
		
//		 //    IS AUTHENTICATED
//	    @PostMapping(path="/login")
//	    public @ResponseBody boolean isAuthenticate(@RequestBody User user) {
//	        return userService.authenticate(user);
//	    }
		
//		@GetMapping("/signup")
//	    public String signup(Model model) {
//	        User user = new User();
//	        model.addAttribute("user", user);
//	        return "signup";
//	    }
//		
//		 @PostMapping("/signup")
//		    public String signupPost(@ModelAttribute("user") User user, Model model) {
//
//		        if (userService.userExists(user.getUsername())) {
//
//		        	model.addAttribute("usernameExists", true);
//		        	return "signup";
//		        }    
//		         else 
//		        {
//		            userService.addNewUser(user);
//
//		            return "redirect:/";
//		        }
//		    }
		
		
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
//	        return userService.login(user);
	    }
	    
	    
//	    @PostMapping("/logout")
//	    public  @ResponseBody ResponseEntity logout(@CookieValue(value = "sessionid", defaultValue = "") String sessionId, HttpServletResponse httpServletResponse) {
////	        CookieMap.getInstance().getMap().remove(sessionId);
//	        ResponseCookie cookie = ResponseCookie.from("sessionid", null)
//	                .sameSite("Strict")
//	                .httpOnly(true)
//	                .path("/")
//	                .maxAge(0)
//	                .build();
//	        httpServletResponse.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
//	        return ResponseEntity.ok("successfully logged out");
//	    }
//
//	    //    SIGNUP
//
//	    @PostMapping(path="/signup")
//	    public @ResponseBody String signup(@RequestBody User user) {
//	        return userService.addNewUser(user);
//	    }
	
}
