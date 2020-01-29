package Tour;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Document(collection = "tour")
@Component
public class TourDetails {
 @Id
 private String id;
 public String spotname;
 public String location;
 public String district;
 public String spottype;
 public float rating;
public TourDetails() {
	super();
}
public TourDetails(String id, String spotname, String location, String district, String spottype, float rating) {
	super();
	this.id = id;
	this.spotname = spotname;
	this.location = location;
	this.district = district;
	this.spottype = spottype;
	this.rating = rating;
}
public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getSpotname() {
	return spotname;
}

public void setSpotname(String spotname) {
	this.spotname = spotname;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}

public String getDistrict() {
	return district;
}

public void setDistrict(String district) {
	this.district = district;
}

public String getSpottype() {
	return spottype;
}

public void setSpottype(String spottype) {
	this.spottype = spottype;
}

public float getRating() {
	return rating;
}
public void setRating(float rating) {
	this.rating = rating;
}
@Override
public String toString() {
	return "TourDetails [id=" + id + ", spotname=" + spotname +", location="+location+", district="+district+",spottype="+spottype+",rating="+rating+"]";
}
}
