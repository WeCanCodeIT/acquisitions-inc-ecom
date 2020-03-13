package org.wcci.apimastery.catalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class ManufacturerController {

    @Autowired
    private ManufacturerRepository manuRepo;

    @RequestMapping("/manufacturers")
    public Collection<Manufacturer> retrieveAllManufacturers(){
        return (Collection<Manufacturer>) manuRepo.findAll();
    }
}
