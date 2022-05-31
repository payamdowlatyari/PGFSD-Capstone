package com.payamd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payamd.entity.Admin;
import com.payamd.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{

	 @Autowired
	private AdminRepository adminRepository;
	
	@Override
	public List<Admin> get() {	
		return adminRepository.findAll();
	}
	
	@Override
	public Admin get(Long id) {
		return adminRepository.findById(id).get();
	}

	@Override
	public Admin getByUsername(String username) {
		return adminRepository.findByUsername(username);
	}

	@Override
	public Admin authenticate(String username, String password) {
		
		List<Admin> admin = adminRepository.findAll();
		
		for(Admin item: admin) {
			if (item.getUsername().equals(username) && item.getPassword().equals(password)) {	
				 
	            return item;
			 }   
		}
		return null;
	}

	

}
