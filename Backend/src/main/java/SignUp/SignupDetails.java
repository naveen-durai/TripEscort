package SignUp;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Document(collection = "signup")
@Component
public class SignupDetails {
 @Id
 private String id;
 private String name;
 @Indexed(unique = true)
 private String email;
 private String gender;
 private String password;
 public SignupDetails()
 {}
 public SignupDetails(String id, String name, String email, String gender, String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.password = password;
	 }
 public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "SignDetails [id=" + id + ", name=" + name +", email="+email+ ",gender=" +gender + ", password=" +password + "]";
	}
}