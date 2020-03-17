package org.wcci.apimastery.catalog;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class ManufacturerController {
    private ManufacturerRepository manufacturerRepository;

    public ManufacturerController(ManufacturerRepository manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }

    @RequestMapping("/manufacturers")
    public Collection<Manufacturer> retrieveManufacturers() {
        return (Collection<Manufacturer>) manufacturerRepository.findAll();
    }
    @RequestMapping("/manufacturers/{id}/")
    public Manufacturer retrieveManufacturer(@PathVariable Long id){
      return manufacturerRepository.findById(id).get();
    }
}
