package com.mycompany.app.controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.app.model.Greeting;
import com.mycompany.app.service.GreetingService;

@RestController
public class GreetingController {

	/*
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),String.format(template, name));
    }
    */
	
	//We have replaced above implementation using Service class
		//Service class does the auto increment as well as printing passed name parameter
	@Autowired
   private GreetingService greetingService;

   @RequestMapping("/greeting")
   public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
       return greetingService.generateMessage(name);
   }

}

