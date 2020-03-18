package com.vet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vet.model.Client;
import com.vet.model.Pet;
import com.vet.service.PetService;

@RestController
@RequestMapping(value = "/pet")
@CrossOrigin(origins = "http://localhost:3000")
public class PetController {
	
	@Autowired
	PetService ps;

	@GetMapping("/all")
	public Iterable<Pet> readAllPets() {
		return ps.readAll();
	}

	@GetMapping("/{id}")
	public Pet findPetById(@PathVariable("id") int id) {
		return ps.findPetById(id);
	}

	@PostMapping("/new")
	public Pet addNewPet(@RequestBody Pet p) {
		return ps.insert(p);
	}

	@PutMapping("/update")
	public Pet updatePet(@RequestBody Pet p) {
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
