package main.java.com.mycompany.app.com.example.labreport.entity;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "file_number")
    private String fileNumber;

    @Column(name = "patient_name")
    private String patientName;

    @Column(name = "patient_id")
    private String patientId;

    @Column(name = "diagnosis_title")
    private String diagnosisTitle;

    @Column(name = "diagnosis_details", columnDefinition = "TEXT")
    private String diagnosisDetails;

    @Column(name = "report_date")
    private Date reportDate;

    // Getters and Setters (omitted for brevity)
    
    // Constructors (omitted for brevity)
    
    // Other methods and relationships (if any)
}