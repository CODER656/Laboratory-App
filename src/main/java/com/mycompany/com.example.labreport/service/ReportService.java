package main.java.com.mycompany.com.example.labreport.service;

import org.springframework.stereotype.Service;


import com.example.labreport.entity.Report;
import com.example.labreport.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {
    private final ReportRepository reportRepository;

    @Autowired
    public ReportService(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    public Report createReport(Report report) {
        // Use the repository's save() method to create a new report
        return reportRepository.save(report);
    }

    public Report getReportById(Long id) {
        // Use the repository's findById() method to retrieve a report by its ID
        return reportRepository.findById(id).orElse(null);
    }

    public List<Report> getAllReports() {
        // Use the repository's findAll() method to retrieve all reports
        return reportRepository.findAll();
    }

    public void updateReport(Report report) {
        // Use the repository's save() method to update an existing report
        reportRepository.save(report);
    }

    public void deleteReportById(Long id) {
        // Use the repository's deleteById() method to delete a report by its ID
        reportRepository.deleteById(id);
    }

    // Add more service methods as needed
}

