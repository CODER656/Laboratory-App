package main.java.com.mycompany.app.com.example.labreport.repository;

import com.example.labreport.entity.Laboratory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaboratoryRepository extends JpaRepository<Laboratory, Long> {
    // Additional custom query methods can be added here if needed
    List<Laboratory> findByLocation(String location);
}
