package main.java.com.mycompany.app.com.example.labreport.entity;


import javax.persistence.*;

@Entity
@Table(name = "laboratories")
public class Laboratory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "identification_number", unique = true)
    private String identificationNumber;

    // Getters and Setters (omitted for brevity)
    
    // Constructors (omitted for brevity)
    
    // Other methods and relationships (if any)
}