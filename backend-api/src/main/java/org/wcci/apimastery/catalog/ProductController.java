package org.wcci.apimastery.catalog;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private ProductRepository productRepo;

    public ProductController(ProductRepository productRepo) {
        this.productRepo = productRepo;
    }

    @DeleteMapping("/products/{id}/")
    public void deleteProduct(@PathVariable Long id){
        productRepo.deleteById(id);
    }
    @GetMapping("/products/{id}/manufacturer/")
    public Manufacturer retrieveProductManufacturer(@PathVariable Long id){
        return productRepo.findById(id).get().getManufacturer();
    }

}
