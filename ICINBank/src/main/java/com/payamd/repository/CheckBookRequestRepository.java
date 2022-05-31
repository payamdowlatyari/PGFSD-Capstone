package com.payamd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.payamd.entity.CheckBookRequest;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository(value = "checkBookRequest")
public interface CheckBookRequestRepository extends JpaRepository <CheckBookRequest, Long>{
	
	@Query(value = "SELECT * from checkBookRequest where acc_no like ?1 order by date desc", nativeQuery = true)
	List<CheckBookRequest> getCheckBookIssuedByAccountNumber(String accountNumber);
	
	@Query(value = "SELECT * from checkBookRequest where req_status like ?1 order by date", nativeQuery = true)
	List<CheckBookRequest> getPendingCheckBookRequests(int status);

	@Transactional
	@Modifying
	@Query(value = "UPDATE checkBookRequest set req_status=?1 where acc_no like ?2", nativeQuery = true)
	void updateCheckBookStatus(int status, String accountNumber);

//	CheckBookRequest getOne(String accountNumber);
}
