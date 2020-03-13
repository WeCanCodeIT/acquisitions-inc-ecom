package org.wcci.apimastery.catalog;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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
}
