package main.java.com.mycompany.app.com.example.labreport.repository;

import com.example.labreport.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {
    // Additional custom query methods can be added here if needed
    List<Report> findByPatientName(String patientName);
}