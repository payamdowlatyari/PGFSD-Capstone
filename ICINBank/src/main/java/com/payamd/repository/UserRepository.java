package com.payamd.repository;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import com.payamd.entity.User;

@Repository
public interface UserRepository extends JpaRepository <User, Long>{
	
	@Query(value = "SELECT * from user where id like ?1", nativeQuery = true)
	List<User> findByUsername(String username);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE user set password=?1 where id like ?2", nativeQuery = true)
	void updateUserPassword(String newPassword, String id);
}
