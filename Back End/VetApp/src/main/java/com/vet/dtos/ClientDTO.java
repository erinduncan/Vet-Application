package com.vet.dtos;

import java.util.Set;

import com.vet.model.Pet;

public class ClientDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String address;
    private Set<Pet> pets;
    private int resourceId;

    public ClientDTO() {
        super();
    }

    public ClientDTO(int id, String firstName, String lastName, String email, String password, String address,
            Set<Pet> pets, int resourceId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.pets = pets;
        this.resourceId = resourceId;
    }

    public ClientDTO(String firstName, String lastName, String email, String password, String address, Set<Pet> pets,
            int resourceId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.pets = pets;
        this.resourceId = resourceId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Set<Pet> getPets() {
        return pets;
    }

    public void setPets(Set<Pet> pets) {
        this.pets = pets;
    }

    public int getResourceId() {
        return resourceId;
    }

    public void setResourceId(int resourceId) {
        this.resourceId = resourceId;
    }

    @Override
    public String toString() {
        return "ClientDTO [address=" + address + ", email=" + email + ", firstName=" + firstName + ", id=" + id
                + ", lastName=" + lastName + ", password=" + password + ", pets=" + pets + ", resourceId=" + resourceId
                + "]";
    }

    
}
    