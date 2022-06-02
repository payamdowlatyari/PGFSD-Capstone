package com.payamd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payamd.entity.Message;
import com.payamd.entity.TransactionDetails;
import com.payamd.entity.Transfer;
import com.payamd.service.TransactionDetailsService;
import com.payamd.service.TransferService;

@RestController
@RequestMapping("/transfer")
@CrossOrigin(origins = "http://localhost:8080")
public class TransferController {

	@Autowired
	TransferService transferService;
	
	@Autowired
	TransactionDetailsService transactionDetailsService;
	
	 @GetMapping("/list")
	    public ResponseEntity<List<Transfer>> getTransferList() {
	        List<Transfer> transfers =  transferService.get();
	        return new ResponseEntity<>(transfers, HttpStatus.OK);
	   }
	 
	 @PostMapping("/transaction/post")
		public Message postTransaction(@RequestBody TransactionDetails transaction) {
			Message message = new Message(this.transactionDetailsService.addTransaction(transaction));
			return message;
		}
}
