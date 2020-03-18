package com.vet.dao;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vet.model.Client;
import com.vet.model.Pet;

@Repository
@Transactional
public interface PetDao extends CrudRepository<Pet, Integer> {

    Pet findById(int id);

    Pet findByOwner(Client c);

}
