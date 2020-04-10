package com.vet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import com.vet.dao.EmployeeDao;
import com.vet.model.Employee;

@Service
@Transactional
public class EmployeeService {

	private EmployeeDao ed;

	@Autowired
	public EmployeeService(EmployeeDao ed) {
		super();
		this.ed = ed;
	}

	public List<Employee> readAll() {
		Iterable<Employee> e = ed.findAll();
		return getListFromIterator(e);
	}

	public Employee findEmployeeById(int id) {
		return ed.findById(id);
	}

	public Employee findByFirstName(String firstName) {
		return ed.findByFirstName(firstName);
	}

	public Employee addEmployee(Employee e) {
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

	public static <T> List<T> getListFromIterator(Iterable<T> iterable) {
		List<T> list = new ArrayList<>();
		iterable.forEach(list::add);
		return list;
	}

}
