package com.vet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vet.dao.EmployeeDao;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeDao ed;

}
