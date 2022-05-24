package com.payamd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.payamd.entity.Transfer;

@Repository
public interface TransferRepository extends JpaRepository <Transfer, Long>{

}
