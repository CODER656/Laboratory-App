package main.java.com.mycompany.com.example.labreport.controller;

import com.example.labreport.entity.Report;
import com.example.labreport.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports") // Base URL for all endpoints in this controller
public class ReportController {

    private final ReportService reportService;

    @Autowired
    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping // Create a new report
    public ResponseEntity<Report> createReport(@RequestBody Report report) {
        Report createdReport = reportService.createReport(report);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdReport);
    }

    @GetMapping("/{id}") // Get a report by ID
    public ResponseEntity<Report> getReportById(@PathVariable Long id) {
        Report report = reportService.getReportById(id);
        if (report != null) {
            return ResponseEntity.ok(report);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping // Get all reports
    public ResponseEntity<List<Report>> getAllReports() {
        List<Report> reports = reportService.getAllReports();
        return ResponseEntity.ok(reports);
    }

    @PutMapping("/{id}") // Update a report
    public ResponseEntity<Report> updateReport(@PathVariable Long id, @RequestBody Report report) {
        Report updatedReport = reportService.updateReport(id, report);
        if (updatedReport != null) {
            return ResponseEntity.ok(updatedReport);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}") // Delete a report
    public ResponseEntity<Void> deleteReport(@PathVariable Long id) {
        boolean deleted = reportService.deleteReport(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Add more methods and mappings as needed
}
