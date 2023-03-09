package com.codecool.cinemagic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication/*(exclude = {DataSourceAutoConfiguration.class })*/	//TODO: delete "exclude", when database is ready
public class CinemagicApplication {

	public static void main(String[] args) {
		SpringApplication.run(CinemagicApplication.class, args);
	}

}
