package com.vet.dtos;

import com.vet.model.EmployeeRole;

public class EmployeeDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private EmployeeRole employeeRole;
    private int resourceId;

    public EmployeeDTO() {
        super();
    }

    public EmployeeDTO(int id, String firstName, String lastName, String email, String phoneNumber,
            EmployeeRole employeeRole, int resourceId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.employeeRole = employeeRole;
        this.resourceId = resourceId;
    }

    public EmployeeDTO(String firstName, String lastName, String email, String phoneNumber, EmployeeRole employeeRole,
            int resourceId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.employeeRole = employeeRole;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public EmployeeRole getEmployeeRole() {
        return employeeRole;
    }

    public void setEmployeeRole(EmployeeRole employeeRole) {
        this.employeeRole = employeeRole;
    }

    public int getResourceId() {
        return resourceId;
    }

    public void setResourceId(int resourceId) {
        this.resourceId = resourceId;
    }

    @Override
    public String toString() {
        return "EmployeeDTO [email=" + email + ", employeeRole=" + employeeRole + ", firstName=" + firstName + ", id="
                + id + ", lastName=" + lastName + ", phoneNumber=" + phoneNumber + ", resourceId=" + resourceId + "]";
    }

}