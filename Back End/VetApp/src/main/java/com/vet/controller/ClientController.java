package com.vet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vet.model.Client;
import com.vet.service.ClientService;

@RestController
@RequestMapping(value = "/client")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

	private ClientService cs;

	@Autowired
	public ClientController(ClientService cs) {
		this.cs = cs;
	}

	@GetMapping(value= "/all", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Client> findAllClients() {
		return cs.findAll();
	}

	@GetMapping("/{id}")
	public Client findClientById(@PathVariable("id") int id) {
		return cs.findById(id);
	}

	@PostMapping("/new")
	public String addNewClient(@RequestBody Client c) {
		cs.addClient(c);
		return "New client added";
	}

	@PutMapping("/update")
	public String updateClient(@RequestBody Client c) {
		cs.update(c);
		return "Client info updated";
	}

	@PutMapping("/updatebyid")
	public String updateClientById(@RequestBody int id) {
		cs.updateById(id);
		return "Client info updated by their ID";
	}

	@DeleteMapping("/delete")
	public String deleteClient(Client c) {
		cs.delete(c);
		return "Client info deleted";
	}

	@DeleteMapping("/deletebyid")
	public String deleteClientById(int id) {
		cs.deleteById(id);
		return "Client deleted by ID";
	}

	// @GetMapping("/bypet/{id}")
	// public Client findByPet(@PathVariable("id") int id) {
	// 	return cs.findClientByPet(id);
	// }

}
