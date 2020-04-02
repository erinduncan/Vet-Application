package com.vet.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vet.model.Client;
import com.vet.model.Pet;

@Repository
public interface PetDao extends CrudRepository<Pet, Integer> {

    Pet findById(int id);
    Pet findByOwner(Client c);

}
