package com.vet.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vet.model.Client;

@Repository
public interface ClientDao extends CrudRepository<Client, Integer> {

    Client findById(int id);
}
