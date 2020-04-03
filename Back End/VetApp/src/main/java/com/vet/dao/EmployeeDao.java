package com.vet.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vet.model.Employee;

@Repository
public interface EmployeeDao extends CrudRepository<Employee, Integer> {

    Employee findById(int id);
    Employee findByFirstName(String firstName);
}
