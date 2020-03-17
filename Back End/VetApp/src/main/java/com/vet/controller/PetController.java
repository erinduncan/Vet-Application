package com.vet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vet.service.PetService;

@RestController
@RequestMapping(value = "/pet")
@CrossOrigin(origins = "http://localhost:3000")
public class PetController {
	
	@Autowired
	PetService ps;

}
