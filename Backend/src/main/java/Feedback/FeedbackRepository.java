package Feedback;

import java.util.List;

import org.springframework.context.annotation.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
@Component
public interface FeedbackRepository extends MongoRepository<FeedbackDetails, String>{
	//List<SignupDetails> findByAge(int age);
}
