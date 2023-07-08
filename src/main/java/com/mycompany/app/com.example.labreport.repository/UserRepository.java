package main.java.com.mycompany.app.com.example.labreport.repository;

import com.example.labreport.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Additional custom query methods can be added here if needed
}