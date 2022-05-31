package com.payamd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payamd.entity.Admin;
import com.payamd.entity.CheckBookRequest;
import com.payamd.entity.Message;
import com.payamd.service.AdminService;
import com.payamd.service.CheckService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:8080")
public class AdminController {

		@Autowired
		private AdminService adminService;
		
		private CheckService checkService; 
		
		@GetMapping(value = "/list")
	    public ResponseEntity<List<Admin>> getUserList() {
	        List<Admin> users =  adminService.get();
	        return new ResponseEntity<>(users, HttpStatus.OK);
	   }
	   
	   @GetMapping("/{id}")
		public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
		   Admin admin = adminService.get(id);
		   Admin frontAdmin = new Admin(admin.getId(), admin.getUsername(), admin.getPassword());
			return ResponseEntity.ok().body(frontAdmin);
	  }
	   
	   @GetMapping("/checkbook")
		public List<CheckBookRequest> getCheckBookRequests() {
			return this.checkService.getPendingCheckBookRequests();
		}
		
		@GetMapping("/checkbook/accept/{id}")
		public Message acceptChequeBookRequest(@PathVariable String id) {
			Message message = new Message(this.checkService.changeCheckBookStatus(id));
			return message;
		}
	   
}
