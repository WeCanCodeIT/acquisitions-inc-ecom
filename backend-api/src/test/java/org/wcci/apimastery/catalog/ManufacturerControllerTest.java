package org.wcci.apimastery.catalog;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collection;
import java.util.Collections;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ManufacturerControllerTest {

    private ManufacturerRepository manufacturerRepository;
    private ManufacturerController underTest;
    private Manufacturer testManufacturer;

    @BeforeEach
    void setUp() {
        manufacturerRepository = mock(ManufacturerRepository.class);
        underTest = new ManufacturerController(manufacturerRepository);
        testManufacturer = new Manufacturer("Test Builder");
        when(manufacturerRepository.findAll()).thenReturn(Collections.singletonList(testManufacturer));
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
       MockMvc mockMvc = MockMvcBuilders.standaloneSetup(underTest).build();
       mockMvc.perform(get("/manufacturers"))
               .andExpect(status().isOk());

    }
}
