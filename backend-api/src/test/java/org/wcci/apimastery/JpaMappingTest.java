package org.wcci.apimastery;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.wcci.apimastery.catalog.Manufacturer;
import org.wcci.apimastery.catalog.ManufacturerRepository;
import org.wcci.apimastery.catalog.Product;
import org.wcci.apimastery.catalog.ProductRepository;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class JpaMappingTest {
    @Autowired
    private ManufacturerRepository manufacturerRepo;
    @Autowired
    private ProductRepository productRepo;
    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void productsShouldHaveAManufacturer(){
        Manufacturer testManufacturer = new Manufacturer("Test Inc.");
        manufacturerRepo.save(testManufacturer);

        Product testProduct1 = new Product("Test Gizmo 1", testManufacturer);
        Product testProduct2 = new Product("Test Gizmo 2", testManufacturer);
        productRepo.save(testProduct1);
        productRepo.save(testProduct2);

        entityManager.flush();
        entityManager.clear();

        Manufacturer retrievedManufacturer = manufacturerRepo.findById(testManufacturer.getId()).get();
        Product retrievedProduct1 = productRepo.findById(testProduct1.getId()).get();
        Product retrievedProduct2 = productRepo.findById(testProduct2.getId()).get();
        assertThat(retrievedManufacturer.getProducts()).contains(retrievedProduct1,retrievedProduct2);
    }
}
