package org.wcci.apimastery.catalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    @Autowired
    private ManufacturerRepository manufacturerRepository;
    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        Manufacturer toyota = new Manufacturer("Toyota", "Solid long lasting cars");
        manufacturerRepository.save(toyota);
        Manufacturer kia = new Manufacturer("Kia", "Required by the state to say that they may catch on fire.");
        manufacturerRepository.save(kia);

        Product mariahsVan = new Product("Nice Van", "Brand new off the lot, seats 24 in 6 rows.", toyota);
        productRepository.save(mariahsVan);
        Product andysCorolla = new Product("Anonymous Toyota Corolla", "For all of your discrete activities when you need anonymous transportation.  Available in gray.", toyota);
        productRepository.save(andysCorolla);

        Product bensCar = new Product("Darn car", "Push to start, from when push to start involved popping the clutch.", kia);
        productRepository.save(bensCar);
        Product rentalCar = new Product("Rental car", "Everyone who has every drove this car drove it like they stole it.", kia);
        productRepository.save(rentalCar);
    }
}
