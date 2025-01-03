package com.calendarapp.service;

import com.calendarapp.model.Communication;
import com.calendarapp.repository.CommunicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunicationService {
    @Autowired
    private CommunicationRepository communicationRepository;

    public List<Communication> getAllCommunications() {
        return communicationRepository.findAll();
    }

    public Communication saveCommunication(Communication communication) {
        return communicationRepository.save(communication);
    }
}