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

import java.util.List;

import javax.validation.Valid;

import com.vet.model.Client;
import com.vet.model.Pet;
import com.vet.service.PetService;

@RestController
@RequestMapping(value = "/pet")
@CrossOrigin(origins = "http://localhost:3000")
public class PetController {
	
	private PetService ps;
	
	@Autowired
	public PetController(PetService ps) {
		this.ps = ps;
	}

	@GetMapping(value="/pets", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Pet> readAllPets() {
		return ps.readAll();
	}

	@GetMapping(value = "/id/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Pet findPetById(@PathVariable @RequestBody int id) {
		return ps.findPetById(id);
	}

	@PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Pet addNewPet(@RequestBody @Valid Pet p) {
		return ps.addPet(p);
	}

	@PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Pet updatePet(@RequestBody @Valid Pet p) {
		return ps.update(p);
	}

	@PutMapping("/updatebyid")
	public Pet updatePetById(@RequestBody int id) {
		return ps.updateById(id);
	}

	@GetMapping("/byowner/{owner}")
	public Pet findByOwner(@PathVariable("owner") Client owner) {
		return ps.findPetByOwner(owner);
	}

	@DeleteMapping("/delete")
	public void deletePet(Pet p) {
		ps.delete(p);
	}

	@DeleteMapping("/deletebyid")
	public void deletePetById(int id) {
		ps.deleteById(id);
	}
}
