package com.controller;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ConfigurableApplicationContext;
@SpringBootApplication
@EntityScan("com.java.model*")
public class SpringMongoDbApplication  extends SpringBootServletInitializer{
	public static void main(String[] args) {
		SpringApplication.run(SpringMongoDbApplication.class, args);
	}
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources( SpringMongoDbApplication.class);
	}
}
