package com.payamd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.payamd.entity.User;

public interface UserRepository extends JpaRepository <User, Long>{

}
