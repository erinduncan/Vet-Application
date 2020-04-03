package com.vet.model;

public enum UserRole {

    MANAGER("Manager"), VET("Vet"), RECEPTIONIST("Receptionist"), CLIENT("Client"), LOCKED("Locked");

    private String userRole;

    UserRole(String userRole) {
        this.userRole = userRole;
    }

    public static UserRole getByName(String userRole) {
        for (UserRole role : UserRole.values()) {
            if (role.userRole == userRole) {
                return role;
            }
        }
        return LOCKED;
    }

    @Override
    public String toString() {
        return this.userRole;
    }
    
}