package com.payamd.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.payamd.entity.TransactionDetails;

@Repository(value = "transactionDetails")
public interface TransactionDetailsRepository extends JpaRepository <TransactionDetails, Long>{

	@Query(
			value = "SELECT * from transactionDetails where acc_no like ?1 order by date desc",
			nativeQuery = true)
	List<TransactionDetails> getTransactionsByAccountNumber(String accountNumber);
}
