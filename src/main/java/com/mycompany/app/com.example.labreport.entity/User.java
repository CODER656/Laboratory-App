package main.java.com.mycompany.app.com.example.labreport.entity;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    // Getters and Setters (omitted for brevity)
    
    // Constructors (omitted for brevity)
    
    // Other methods and relationships (if any)
}
