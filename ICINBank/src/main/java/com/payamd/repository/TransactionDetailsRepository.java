package com.payamd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.payamd.entity.TransactionDetails;

@Repository(value = "transactionDetails")
public interface TransactionDetailsRepository extends JpaRepository <TransactionDetails, Long>{

}
