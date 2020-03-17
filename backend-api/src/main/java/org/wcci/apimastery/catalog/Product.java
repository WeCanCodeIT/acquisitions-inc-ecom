package org.wcci.apimastery.catalog;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Product {
    public String getName() {
        return name;
    }

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    @JsonIgnore
    @ManyToOne
    private Manufacturer manufacturer;

    protected Product() {
    }

    public Product(String name, String description, Manufacturer manufacturer) {
        this.name = name;
        this.description = description;
        this.manufacturer = manufacturer;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Product product = (Product) o;

        if (name != null ? !name.equals(product.name) : product.name != null) return false;
        if (id != null ? !id.equals(product.id) : product.id != null) return false;
        return manufacturer != null ? manufacturer.equals(product.manufacturer) : product.manufacturer == null;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + (id != null ? id.hashCode() : 0);
        result = 31 * result + (manufacturer != null ? manufacturer.hashCode() : 0);
        return result;
    }
}
