package com.calendarapp.controller;

import com.calendarapp.model.Communication;
import com.calendarapp.service.CommunicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/communications")
public class CommunicationController {
    @Autowired
    private CommunicationService communicationService;

    @GetMapping
    public List<Communication> getAllCommunications() {
        return communicationService.getAllCommunications();
    }

    @PostMapping
    public Communication addCommunication(@RequestBody Communication communication) {
        return communicationService.saveCommunication(communication);
    }
}