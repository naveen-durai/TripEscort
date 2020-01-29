package Profile;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.*;
@Document(collection = "profileimage")
public class Profileimage {
	@Id
	 private String id;
	 private String image;
	 private String imagename;
	 
	public Profileimage() {
		super();
	}

	public Profileimage(String id, String image, String imagename) {
		super();
		this.id = id;
		this.image = image;
		this.imagename = imagename;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image2) {
		this.image = image2;
	}

	public String getImagename() {
		return imagename;
	}

	public void setImagename(String imagename) {
		this.imagename = imagename;
	}

	@Override
	public String toString() {
		return "Profileimage [id=" + id + ", image=" + image +", imagename=" + imagename +"]";
	}
}
