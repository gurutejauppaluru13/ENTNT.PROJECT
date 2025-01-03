package com.calendarapp.service;

import com.calendarapp.model.Company;
import com.calendarapp.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public Company saveCompany(Company company) {
        // Save the company object and return the saved object
        return companyRepository.save(company);
    }
}