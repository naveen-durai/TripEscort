package Feedback;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Document(collection = "feedback")
@Component
public class FeedbackDetails {
 @Id
 private String id;
 private String name;
 private String mail;
 private long phoneno;
 private String msg;
 public FeedbackDetails()
 {}
public FeedbackDetails(String id, String name, String mail, long phoneno, String msg) {
	super();
	this.id = id;
	this.name = name;
	this.mail = mail;
	this.phoneno = phoneno;
	this.msg = msg;
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
public String getMail() {
	return mail;
}
public void setMail(String mail) {
	this.mail = mail;
}
public long getPhoneno() {
	return phoneno;
}
public void setPhoneno(long phoneno) {
	this.phoneno = phoneno;
}
public String getMsg() {
	return msg;
}
public void setMsg(String msg) {
	this.msg = msg;
}
	@Override
	public String toString() {
		return "SignDetails [id=" + id + ", name=" + name +", mail="+mail+ ",phoneno=" +phoneno+ ", password=" +msg+"]";
	}
}