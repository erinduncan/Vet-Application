package com.vet.model;

public enum EmployeeRole {

	MANAGER("Manager"), VET("Vet"), RECEPTIONIST("Receptionist");

	private String roleName;

	EmployeeRole(String roleName) {
		this.roleName = roleName;
	}

	public static EmployeeRole getByName(String roleName) {
		for (EmployeeRole role : EmployeeRole.values()) {
			if (role.roleName == roleName) {
				return role;
			}
		}
		return null;
	}

	@Override
	public String toString() {
		return this.roleName;
	}

}
