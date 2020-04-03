package com.vet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import com.vet.model.*;
import com.vet.service.ClientService;
import com.vet.service.EmployeeService;
import com.vet.service.PetService;

@EnableSwagger2
@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "VetConnect API", version = "1.0", description = "Documentation VetConnect API"))
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

	@Bean
	public Docket swaggerPersonApi10() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
					.apis(RequestHandlerSelectors.basePackage("com.vet.controller"))
					.paths(PathSelectors.any())
				.build()
				.apiInfo(new ApiInfoBuilder().version("1.0").title("VetConnect API").description("Documentation VetConnect API v1.0").build());
	}

	@Override
	public void run(String... args) throws Exception {
		Client erin = new Client("Erin", "Duncan", "eduncan540@gmail.com", "password", "(540) 809-2956", "12025 Town Square St Unit 711 Reston VA 20190");
		Client david = new Client("David", "Ortega", "dortega14@gmail.com", "password", "1111111111", "123 W St");
		cs.addClient(erin);
		cs.addClient(david);
		ps.addPet(new Pet(Animal.DOG, "Midnight", 7, david, "A very good grandpa"));
		ps.addPet(new Pet(Animal.CAT, "Ted", 7, erin, "A diabete sweetie"));

	}
}
