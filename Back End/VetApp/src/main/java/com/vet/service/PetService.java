package com.vet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vet.dao.PetDao;
import com.vet.model.Client;
import com.vet.model.Pet;

@Service
public class PetService {
	
	@Autowired
	PetDao pd;

	public void setPd(PetDao pd) {
		this.pd = pd;
	}

	public Iterable<Pet> readAll() {
		return pd.findAll();
	}

	public Pet findPetById(int id) {
		return pd.findById(id);
	}

	public Pet insert(Pet p) {
		return pd.save(p);
	}

	public Pet update(Pet p) {
		return pd.save(p);
	}

	public Pet updateById(int id) {
		Pet p = pd.findById(id);
		return pd.save(p);
	}

	public void delete(Pet p) {
		pd.delete(p);
	}

	public void deleteById(int id) {
		Pet p = pd.findById(id);
		pd.delete(p);
	}

	public Pet findPetByOwner(Client c) {
		return pd.findByOwner(c);
	}
}
