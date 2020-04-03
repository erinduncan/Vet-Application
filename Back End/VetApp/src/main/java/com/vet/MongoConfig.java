// package com.vet;

// import java.io.IOException;

// import com.mongodb.MongoClient;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.data.mongodb.core.MongoTemplate;
// import cz.jirutka.spring.embedmongo.EmbeddedMongoFactoryBean;

// public class MongoConfig {

//     private static final String MONGO_DB_URL = "localhost";
//     private static final String MONGO_DB_NAME = "embedded_db";

//     @Bean
//     public MongoTemplate mongoTemplate() throws IOException {
//         EmbeddedMongoFactoryBean mongo = new EmbeddedMongoFactoryBean();
//         mongo.setBindIp(MONGO_DB_URL);
//         MongoClient mongoClient = mongo.getObject();
//         MongoTemplate mongoTemplate = new MongoTemplate(mongoClient, MONGO_DB_NAME);
//         return mongoTemplate;
//     }

// }