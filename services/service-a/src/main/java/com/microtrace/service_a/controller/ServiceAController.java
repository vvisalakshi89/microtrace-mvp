package com.microtrace.service_a.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceAController {

	@GetMapping(path="/invokeA")
	public String invokeServiceA()
	{
		return "Hello welcome to Service A!";
		
	}
}
