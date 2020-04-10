package com.vet.controller;

import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

import com.vet.model.Employee;
import com.vet.service.EmployeeService;

@RestController
@RequestMapping(value = "/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

	private EmployeeService es;

	@Autowired
	public EmployeeController(EmployeeService es) {
		this.es = es;
	}

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return es.readAll();
	}

	@GetMapping(value = "/id/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Employee findEmployeeById(@PathVariable @RequestBody int id) {
		return es.findEmployeeById(id);
	}

	@PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Employee addNewEmployee(@RequestBody @Valid Employee e) {
		return es.addEmployee(e);
	}

	@PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Employee updateEmployee(@RequestBody @Valid Employee e) {
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
