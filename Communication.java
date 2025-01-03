package com.calendarapp.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Communication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Company company;

    private String type;
    private LocalDate date;
    private String notes;

    // Getters and Setters
}