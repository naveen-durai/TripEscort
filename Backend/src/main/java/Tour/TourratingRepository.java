package Tour;

import java.util.*;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
@Component
public interface TourratingRepository extends MongoRepository<TourratingDetails, String>{
    List<TourratingDetails> deleteBySpotname(String spotname);
}
