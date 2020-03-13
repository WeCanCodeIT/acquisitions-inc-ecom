package org.wcci.apimastery.catalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

@Component
public class Populator implements CommandLineRunner {

    @Autowired
    private ManufacturerRepository manufacturerRepository;
    @Autowired
    private ProductRepository productRepository;
    @Override
    public void run(String... args) throws Exception {
        Manufacturer toyota = new Manufacturer("Toyota");
        manufacturerRepository.save(toyota);
        Manufacturer kia = new Manufacturer("Kia");
        manufacturerRepository.save(kia);
        Product bensCar = new Product("Darn car", kia);
        productRepository.save(bensCar);
        Product rentalCar = new Product("Rental car", kia);
        productRepository.save(rentalCar);
    }
}
