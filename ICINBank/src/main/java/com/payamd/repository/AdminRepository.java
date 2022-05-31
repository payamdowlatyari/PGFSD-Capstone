package com.payamd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.payamd.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository <Admin, Long>{
	Admin findByUsername(String username);
}
