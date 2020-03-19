package org.wcci.apimastery.catalog;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class ManufacturerController {
    private ManufacturerRepository manufacturerRepository;
    private ProductRepository productRepository;

    public ManufacturerController(ManufacturerRepository manufacturerRepository, ProductRepository productRepository) {
        this.manufacturerRepository = manufacturerRepository;
        this.productRepository = productRepository;
    }

    @GetMapping("/manufacturers/")
    public Collection<Manufacturer> retrieveManufacturers() {
        return (Collection<Manufacturer>) manufacturerRepository.findAll();
    }

    @GetMapping("/manufacturers/{id}/")
    public Manufacturer retrieveManufacturer(@PathVariable Long id) {
        return manufacturerRepository.findById(id).get();
    }

//    @DeleteMapping("/manufacturers/{id}/")
//    public void deleteManufacturer(@PathVariable Long id) {
//        manufacturerRepository.deleteById(id);
//    }

    @DeleteMapping("/manufacturers/{id}/")
    public void deleteManufacturer(@PathVariable Long id) {
        Manufacturer manToRemove = manufacturerRepository.findById(id).get();

        for (Product productToRemove : manToRemove.getProducts()) {
            productRepository.delete(productToRemove);
        }
        manufacturerRepository.deleteById(id);
    }

    @PostMapping("/manufacturers/")
    public Manufacturer createManufacturer(@RequestBody Manufacturer manufacturerToAdd) {
        return manufacturerRepository.save(manufacturerToAdd);
    }

    @PatchMapping("/manufacturers/{id}/products/")
    public Manufacturer updateManufacturerProducts(@PathVariable Long id, @RequestBody Product requestBodyProduct) {
        Manufacturer manufacturerToPatch = manufacturerRepository.findById(id).get();
        Product productToAdd = new Product(requestBodyProduct.getName(), requestBodyProduct.getDescription(), manufacturerToPatch);
        productRepository.save(productToAdd);
        return manufacturerRepository.save(manufacturerToPatch);
    }
}
