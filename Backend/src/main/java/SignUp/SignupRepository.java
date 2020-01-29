package SignUp;

import java.util.List;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

@Component
public interface SignupRepository extends MongoRepository<SignupDetails, String>{
	SignupDetails findByEmail(String email);
}
