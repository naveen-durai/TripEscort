package Profile;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.io.*;
@Document(collection = "profile")
@Component
public class ProfileDetails {
	@Id
	 private String id;
	 private String firstname;
	 private String lastname;
	 private String birthday;
	 private String email;
	 private long mobileno;
	 private long houseno;
	 private String city;
	 private String country;
	 private long postcode;
	public ProfileDetails()
	 {}
	public ProfileDetails(String id, String firstname, String lastname, String birthday, String email, long mobileno,
			long houseno, String city, String country, long postcode) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.birthday = birthday;
		this.email = email;
		this.mobileno = mobileno;
		this.houseno = houseno;
		this.city = city;
		this.country = country;
		this.postcode = postcode;
	}
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getMobileno() {
		return mobileno;
	}

	public void setMobileno(long mobileno) {
		this.mobileno = mobileno;
	}

	public long getHouseno() {
		return houseno;
	}

	public void setHouseno(long houseno) {
		this.houseno = houseno;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country= country;
	}

	public long getPostcode() {
		return postcode;
	}

	public void setPostcode(long postcode) {
		this.postcode = postcode;
	}

	@Override
	public String toString() {
		return "ProfileDetails [id=" + id + ", firstname=" + firstname +", lastname=" + lastname +", email=" + email +", birthday=" + birthday +", mobileno="+ mobileno+", houseno="+ houseno+", city"+city+", country"+country+",postcode"+postcode+"]";
	}
}
