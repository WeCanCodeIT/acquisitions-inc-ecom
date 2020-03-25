package org.wcci.apimastery.catalog;

import org.springframework.web.bind.annotation.*;

@RestController
public class ProductController {

    private ProductRepository productRepo;
    private ManufacturerRepository manufacturerRepo;

    public ProductController(ProductRepository productRepo, ManufacturerRepository manufacturerRepo) {
        this.productRepo = productRepo;
        this.manufacturerRepo = manufacturerRepo;
    }

    @DeleteMapping("/products/{id}/")
    public void deleteProduct(@PathVariable Long id){
        productRepo.deleteById(id);
    }
    @GetMapping("/products/{id}/manufacturer/")
    public Manufacturer retrieveProductManufacturer(@PathVariable Long id){
        return productRepo.findById(id).get().getManufacturer();
    }
    @PatchMapping("/products/{id}/update/")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product requestBodyProduct) {
        Product productToPatch = productRepo.findById(id).get();
        productToPatch.setDescription(requestBodyProduct.getDescription());

        return productRepo.save(productToPatch);
    }
    @PostMapping("/products/{manufacturerId}/")
    public Product createProduct(@PathVariable Long manufacturerId, @RequestBody Product productToAdd) {
        Manufacturer parentManufacturer = manufacturerRepo.findById(manufacturerId).get();
        Product newProduct = new Product(productToAdd.getName(), productToAdd.getDescription(), parentManufacturer);
        return productRepo.save(newProduct);
    }

}
