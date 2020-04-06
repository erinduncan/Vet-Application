package com.vet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import com.vet.dao.ClientDao;
import com.vet.model.Client;

@Service
@Transactional
public class ClientService {

	private ClientDao cd;

	@Autowired
	public ClientService(ClientDao cd) {
		super();
		this.cd = cd;
	}

	public List<Client> findAll() {
		Iterable<Client> c = cd.findAll();
		return getListFromIterator(c);
	}

	public Client findById(int id) {
		return cd.findById(id);
	}

	public void addClient(Client c) {
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

	// public Client findClientByPet(int id) {
	// 	Pet pet = pd.findById(id);
	// 	return cd.findByPet(pet);
	// }

	public static <T> List<T> getListFromIterator(Iterable<T> iterable) {
		List<T> list = new ArrayList<>();
		iterable.forEach(list::add);
		return list;
	}

}
