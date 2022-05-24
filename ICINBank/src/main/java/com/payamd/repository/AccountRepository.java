package com.payamd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.payamd.entity.Account;

@Repository
public interface AccountRepository extends JpaRepository <Account, Long>{

}
