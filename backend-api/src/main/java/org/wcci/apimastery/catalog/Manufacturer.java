package org.wcci.apimastery.catalog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Manufacturer {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    @OneToMany(mappedBy = "manufacturer")
    private Collection<Product> products;

    protected Manufacturer() {
    }

    ;

    public Manufacturer(String name, String description) {

        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public Collection<Product> getProducts() {
        return products;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Manufacturer that = (Manufacturer) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }
}
