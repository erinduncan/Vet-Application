package com.vet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.vet.dao.PetDao;
// import com.vet.model.Client;
import com.vet.model.Pet;

@Service
@Transactional
public class PetService {
	
	private PetDao pd;
	
	@Autowired
	public PetService(PetDao pd) {
		super();
		this.pd = pd;
	}

	public List<Pet> readAll() {
		Iterable<Pet> p = pd.findAll();
		return getListFromIterator(p);
	}

	public Pet findPetById(int id) {
		return pd.findById(id);
	}

	public Pet addPet(Pet p) {
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

	// public Pet findPetByOwner(Client c) {
	// 	return pd.findByOwner(c);
	// }

	public static <T> List<T> getListFromIterator(Iterable<T> iterable) {
		List<T> list = new ArrayList<>();
		iterable.forEach(list::add);
		return list;
	}
}
