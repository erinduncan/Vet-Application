package com.vet;

import com.vet.model.Animal;
import com.vet.model.Client;
import com.vet.model.Employee;
import com.vet.model.EmployeeRole;
import com.vet.model.Pet;
import com.vet.service.ClientService;
import com.vet.service.EmployeeService;
import com.vet.service.PetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VetAppApplication implements CommandLineRunner {

	@Autowired
	private ClientService cs;

	@Autowired
	private PetService ps;

	@Autowired
	private EmployeeService es;

	public static void main(String[] args) {
		SpringApplication.run(VetAppApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Client erin = new Client("Erin", "Duncan", "eduncan540@gmail.com", "password", "(540) 809-2956", "12025 Town Square St Unit 711 Reston VA 20190");
		Client david = new Client("David", "Ortega", "dortega14@gmail.com", "password", "1111111111", "123 W St");
		Client kyle = new Client("Kyle", "Panas", "kp@gmail.com", "password", "1111111222", "Marine camp land");
		Employee admin = new Employee("Naruto", "Uzumaki", "email@email.com", "password", EmployeeRole.MANAGER, "phoneNumber");
		Employee vet = new Employee("Sasuke", "Uchiha", "email2@email.com", "password", EmployeeRole.VET, "phoneNumber");
		Employee receptionist = new Employee("Kakashi", "Katake", "email3@email.com", "password", EmployeeRole.RECEPTIONIST, "phoneNumber");
		Employee vet2 = new Employee("Sakura", "Haruno", "email4@email.com", "password", EmployeeRole.VET, "phoneNumber");
		Employee vet3 = new Employee("Neji", "Hyuga", "email5@email.com", "password", EmployeeRole.VET, "phoneNumber");
		cs.addClient(erin);
		cs.addClient(david);
		cs.addClient(kyle);
		ps.addPet(new Pet(Animal.DOG, "Midnight", 13, david, "A very good grandpa"));
		ps.addPet(new Pet(Animal.CAT, "Ted", 7, erin, "A diabete sweetie"));
		ps.addPet(new Pet(Animal.DOG, "Monster", 14, erin, "A good boy; rest in peace"));
		ps.addPet(new Pet(Animal.CAT, "Sweet Pea", 6, kyle, "Naughty naughty naughty"));
		ps.addPet(new Pet(Animal.DOG, "Ana Bear", 5, kyle, "That dog ain't right..."));
		es.addEmployee(admin);
		es.addEmployee(vet);
		es.addEmployee(vet2);
		es.addEmployee(vet3);
		es.addEmployee(receptionist);
	}
}
