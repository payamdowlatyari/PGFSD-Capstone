package com.payamd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.entity.Transfer;
import com.payamd.repository.TransferRepository;

@Service
public class TransferServiceImpl implements TransferService{

	@Autowired
	private TransferRepository transferRepository; 
	
	@Override
	public List<Transfer> get() {
		return transferRepository.findAll();
	}

}
