package com.calendarapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String location;

    @Column(name = "linkedin")
    private String linkedin;

    @Column(name = "emails")
    private String emails;

    @Column(name = "phone_numbers")
    private String phoneNumbers;

    @Column(name = "comments")
    private String comments;

    @Column(name = "periodicity")
    private String periodicity;

    // Default constructor
    public Company() {}

    // Constructor with parameters
    public Company(String name, String location, String linkedin, String emails,
                   String phoneNumbers, String comments, String periodicity) {
        this.name = name;
        this.location = location;
        this.linkedin = linkedin;
        this.emails = emails;
        this.phoneNumbers = phoneNumbers;
        this.comments = comments;
        this.periodicity = periodicity;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getEmails() {
        return emails;
    }

    public void setEmails(String emails) {
        this.emails = emails;
    }

    public String getPhoneNumbers() {
        return phoneNumbers;
    }

    public void setPhoneNumbers(String phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getPeriodicity() {
        return periodicity;
    }

    public void setPeriodicity(String periodicity) {
        this.periodicity = periodicity;
    }
}