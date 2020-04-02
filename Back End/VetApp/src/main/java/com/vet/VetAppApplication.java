package com.vet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.vet.dao.ClientDao;
import com.vet.model.Client;

@SpringBootApplication
public class VetAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(VetAppApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ClientDao cd) {
		return args -> {
			cd.save(new Client("David", "Ortega", "dave@email.com", "password", "(305) 305-3051", "123 W 45 ST"));
			// ClientService cs = new ClientService();
			// cd.save(new Pet(Animal.DOG, "Midnight", 14, cs.findById(1), "He's my lil
			// gramps"));
		};
	}

	// @Bean
	// CommandLineRunner petRunner(PetDao pd) {
	// 	return args -> {
	// 		ClientService cs = new ClientService();
	// 		pd.save(new Pet(Animal.DOG, "Midnight", 14, cs.findById(1), "He's my lil gramps"));
	// 	};

	// }
}
