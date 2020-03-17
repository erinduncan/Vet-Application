package com.vet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vet.dao.PetDao;

@Service
public class PetService {
	
	@Autowired
	PetDao pd;

}
