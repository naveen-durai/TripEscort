package Tour;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;;
@Component
public interface TourRepository extends MongoRepository<TourDetails, String>{
	List<TourDetails> findBydistrictAndSpottype(String district,String spottype);
	List<TourDetails> findBydistrict(String district);
	List<TourDetails> findBySpottype(String spottype);
	TourDetails findBySpotname(String spotname);
}
