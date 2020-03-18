package com.vet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vet.model.Employee;
import com.vet.service.EmployeeService;

@RestController
@RequestMapping(value = "/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	
	@Autowired
	EmployeeService es;

	@GetMapping("/all")
	public Iterable<Employee> readAllEmployees() {
		return es.readAll();
	}

	@GetMapping("/{id}")
	public Employee findEmployeeById(@PathVariable("id") int id) {
		return es.findEmployeeById(id);
	}

	@PostMapping("/new")
	public Employee addNewEmployee(@RequestBody Employee e) {
		return es.insert(e);
	}

	@PutMapping("/update")
	public Employee updateEmployee(@RequestBody Employee e) {
		return es.update(e);
	}

	@PutMapping("/updatebyid")
	public Employee updateEmployeeById(@RequestBody int id) {
		return es.updateById(id);
	}

	@DeleteMapping("/delete")
	public void deleteEmployee(Employee e) {
		es.delete(e);
	}

	@DeleteMapping("/deletebyid")
	public void deleteEmployeeById(int id) {
		es.deleteById(id);
	}

}
