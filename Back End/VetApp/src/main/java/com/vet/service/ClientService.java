package com.vet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vet.dao.ClientDao;
import com.vet.model.Client;
import com.vet.model.Pet;

@Service
public class ClientService {
	
	@Autowired
	ClientDao cd;

	public void setCd(ClientDao cd) {
		this.cd = cd;
	}
	
	public Iterable<Client> findAll() {
		return cd.findAll();
	}
	
	public Client findById(int id) {
		return cd.findById(id);
	}
	
	public void insert(Client c) {
		cd.save(c);
	}
	
	public void update(Client c) {
		cd.save(c);
	}
	
	// update by ID in case we need it
	public void updateById(int id) {
		Client c = cd.findById(id);
		cd.save(c);
	}
	
	public void delete(Client c) {
		cd.delete(c);
	}
	
	// delete by ID in case we need it
	public void deleteById(int id) {
		Client c = cd.findById(id);
		cd.delete(c);
	}

	public Client findClientByPet(Pet p) {
		return cd.findByPet(p);
	}

}
