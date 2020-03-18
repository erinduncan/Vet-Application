package com.vet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vet.dao.EmployeeDao;
import com.vet.model.Employee;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeDao ed;

	public void seted(EmployeeDao ed) {
		this.ed = ed;
	}

	public Iterable<Employee> readAll() {
		return ed.findAll();
	}

	public Employee findEmployeeById(int id) {
		return ed.findById(id);
	}

	public Employee insert(Employee e) {
		return ed.save(e);
	}

	public Employee update(Employee e) {
		return ed.save(e);
	}

	public Employee updateById(int id) {
		Employee p = ed.findById(id);
		return ed.save(p);
	}

	public void delete(Employee p) {
		ed.delete(p);
	}

	public void deleteById(int id) {
		Employee p = ed.findById(id);
		ed.delete(p);
	}

}
