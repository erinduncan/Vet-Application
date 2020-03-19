package com.vet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.vet.dao.PetDao;
import com.vet.dao.ClientDao;
import com.vet.model.Animal;
import com.vet.model.Pet;
import com.vet.model.Client;
import com.vet.service.ClientService;

@SpringBootApplication
public class VetAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(VetAppApplication.class, args);
	}
	
	// @Bean
	// CommandLineRunner runner(ClientDao cd) {
	// 	return args -> {
	// 		cd.save(new Client("David", "Ortega", "dave@email.com", "password", "(305) 305-3051", "123 W 45 ST"));
	// 		// ClientService cs = new ClientService();
	// 		// cd.save(new Pet(Animal.DOG, "Midnight", 14, cs.findById(1), "He's my lil gramps"));
	// 	};
	// }

}
