package com.vet.dao;

import org.springframework.data.repository.CrudRepository;

import com.vet.model.Employee;

public interface EmployeeDao extends CrudRepository<Employee, Integer> {

}
