package com.vet.dtos;

import com.vet.model.Animal;

public class PetDTO {
    private int id;
    private Animal species;
    private String name;
    private int owner;
    private String description;
    private int resourceId;

    //TODO May need to change owner from int to Client

    public PetDTO() {
        super();
    }

    public PetDTO(int id, Animal species, String name, int owner, String description, int resourceId) {
        this.id = id;
        this.species = species;
        this.name = name;
        this.owner = owner;
        this.description = description;
        this.resourceId = resourceId;
    }

    public PetDTO(Animal species, String name, int owner, String description, int resourceId) {
        this.species = species;
        this.name = name;
        this.owner = owner;
        this.description = description;
        this.resourceId = resourceId;
    }

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

    public int getOwner() {
        return owner;
    }

    public void setOwner(int owner) {
        this.owner = owner;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getResourceId() {
        return resourceId;
    }

    public void setResourceId(int resourceId) {
        this.resourceId = resourceId;
    }

    @Override
    public String toString() {
        return "PetDTO [description=" + description + ", id=" + id + ", name=" + name + ", owner=" + owner
                + ", resourceId=" + resourceId + ", species=" + species + "]";
    }

    

}