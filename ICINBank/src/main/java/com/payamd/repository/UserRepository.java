package com.payamd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.payamd.entity.User;

@Repository
public interface UserRepository extends JpaRepository <User, Long>{
	User findByUsername(String username);
}
