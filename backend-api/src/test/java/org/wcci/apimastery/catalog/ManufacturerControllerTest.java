package org.wcci.apimastery.catalog;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class ManufacturerControllerTest {

    private ManufacturerRepository manufacturerRepository;
    private ManufacturerController underTest;
    private Manufacturer testManufacturer;
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        manufacturerRepository = mock(ManufacturerRepository.class);
        ProductRepository productRepository = mock(ProductRepository.class);
        underTest = new ManufacturerController(manufacturerRepository, productRepository);
        testManufacturer = new Manufacturer("Test Builder", "Sample Description");
        when(manufacturerRepository.findAll()).thenReturn(Collections.singletonList(testManufacturer));
        mockMvc = MockMvcBuilders.standaloneSetup(underTest).build();
    }

    @Test
    public void retrieveManufacturersReturnsListOfManufacturerFromMockRepo() {
        underTest.retrieveManufacturers();
        verify(manufacturerRepository).findAll();
    }

    @Test
    public void retrieveManufacturersReturnsListOfManufacturersContainingMockManufacturer() {
        Collection<Manufacturer> result = underTest.retrieveManufacturers();
        assertThat(result).contains(testManufacturer);
    }

    @Test
    public void underTestIsWiredCorrectlyWithAnnotations() throws Exception {
        mockMvc.perform(get("/manufacturers"))
                .andExpect(status().isOk());

    }

    @Test
    public void underTestIsWiredCorrectlyForSingleManufacturer() throws Exception {
        when(manufacturerRepository.findById(1L)).thenReturn(Optional.of(testManufacturer));
        mockMvc.perform(get("/manufacturers/1/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.name", is("Test Builder")))
                .andExpect(jsonPath("$.description", is("Sample Description")));
    }

    @Test
    public void deleteManufacturerWillAskRepositoryToDelete(){
        underTest.deleteManufacturer(1L);
        verify(manufacturerRepository).deleteById(1L);
    }
}
