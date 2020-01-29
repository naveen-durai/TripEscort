package Tour;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Document(collection = "tourrating")
@Component
public class TourratingDetails {
	 @Id
	 private String id;
	 public String mailid;
	 public String spotname;
	 public int rating;
	public TourratingDetails() {
		super();
	}
	public TourratingDetails(String id, String mailid, String spotname, int rating) {
		super();
		this.id = id;
		this.mailid = mailid;
		this.spotname = spotname;
		this.rating = rating;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMailid() {
		return mailid;
	}
	public void setMailid(String mailid) {
		this.mailid = mailid;
	}
	public String getSpotname() {
		return spotname;
	}
	public void setSpotname(String spotname) {
		this.spotname = spotname;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "TourratingDetails [id=" + id + ", mailid=" + mailid +", spotname="+spotname+", rating="+rating+"]";
	}
}
