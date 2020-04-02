package com.vet.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Pet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Enumerated(EnumType.STRING)
	private Animal species;

	private String name;

	private int age;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn
	private Client owner;

	//TODO May need to change Client to int

	private String description;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Animal getSpecies() {
		return species;
	}

	public void setSpecies(Animal species) {
		this.species = species;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Client getOwner() {
		return owner;
	}

	public void setOwner(Client owner) {
		this.owner = owner;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Pet() {
		super();
	}

	public Pet(int id, Animal species, String name, int age, Client owner, String description) {
		super();
		this.id = id;
		this.species = species;
		this.name = name;
		this.age = age;
		this.owner = owner;
		this.description = description;
	}

	public Pet(Animal species, String name, int age, Client owner, String description) {
		super();
		this.species = species;
		this.name = name;
		this.age = age;
		this.owner = owner;
		this.description = description;
	}

	@Override
	public String toString() {
		return "Pet [id=" + id + ", species=" + species + ", name=" + name + ", age=" + age + ", owner=" + owner
				+ ", description=" + description + "]";
	}

}
