package com.vet.main;

import com.vet.service.ClientService;

import org.springframework.beans.factory.annotation.Autowired;

public class Driver {

    @Autowired
    static ClientService cs;

    public static void main(String[] args) {
        System.out.println(cs.findAll());
    }

}