package com.vet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vet.model.Client;
import com.vet.service.ClientService;

@RestController
@RequestMapping(value = "/client")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {
	
	@Autowired
	ClientService cs;
	
	@GetMapping("/all")
	public Iterable<Client> findAllClients() {
		return cs.findAll();
	}
	
	@GetMapping("/{id}")
	public Client findClientById(@PathVariable int id) {
		return cs.findById(id);
	}
	
	@PostMapping("/new")
	public String insert(Client c) {
		cs.insert(c);
		return "new client added";
	}
	
	@PutMapping("/update")
	public String update(Client c) {
		cs.update(c);
		return "client info updated";
	}
	
	@PutMapping("/updatebyid")
	public String updateById(int id) {
		cs.updateById(id);
		return "client info updated by their ID";
	}
	
	@DeleteMapping("/delete")
	public String delete(Client c) {
		cs.delete(c);
		return "client info deleted";
	}
	
	@DeleteMapping("/deletebyid")
	public String deleteById(int id) {
		cs.deleteById(id);
		return "client deleted by ID";
	}

}
