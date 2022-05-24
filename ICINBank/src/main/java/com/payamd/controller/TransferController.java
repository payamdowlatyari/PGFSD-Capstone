package com.payamd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payamd.entity.Transfer;
import com.payamd.service.TransferService;

@RestController
@RequestMapping("/transfer")
@CrossOrigin(origins = "http://localhost:8080")
public class TransferController {

	@Autowired
	private TransferService transferService;
	
	 @GetMapping(value = "/list")
	    public ResponseEntity<List<Transfer>> getTransferList() {
	        List<Transfer> transfers =  transferService.get();
	        return new ResponseEntity<>(transfers, HttpStatus.OK);
	   }
}
