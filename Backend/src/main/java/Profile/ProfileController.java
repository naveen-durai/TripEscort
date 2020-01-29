package Profile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.servlet.ServletContext;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

@Controller
public class ProfileController {
	@Autowired
	ProfileRepository profilerepository;
	@Autowired
	ServletContext context;
	public List<ProfileDetails> getProfile() 
	{
	List<ProfileDetails> profile = new ArrayList<ProfileDetails>();
	profilerepository.findAll().forEach(profile::add);
	return profile;
	}
	public ProfileDetails postProfile(ProfileDetails profile) {
		ProfileDetails p1 = profilerepository.save(new ProfileDetails(profile.getId(),profile.getFirstname(),profile.getLastname(),profile.getBirthday(),profile.getEmail(),profile.getMobileno(),profile.getHouseno(),profile.getCity(),profile.getCountry(),profile.getPostcode()));
		return p1;
	}
	public Profileimage getProfileimage(@RequestParam("email") String email) throws IOException {
		Profileimage pi=null;
		String filepath=context.getRealPath("/images");
		File file=new File(filepath);
		for(File f:file.listFiles())
		{
		String extension=FilenameUtils.getExtension(f.getName());
		if(f.getName().equals(email.split("@")[0]+'.'+extension))
		{
		FileInputStream fi=new FileInputStream(f);
		byte[] b=new byte[(int)f.length()];
		fi.read(b);
		String encodeBase64=Base64.getEncoder().encodeToString(b);
		String image="data:image/"+extension+";base64,"+encodeBase64;
		pi=new Profileimage();
		pi.setImage(image);
		pi.setImagename(email);
		}
		}
		return pi;
	}
	public void postProfileimage(@RequestParam("image") MultipartFile image,@RequestParam("email") String email,@RequestParam("name") String name) throws JsonParseException, JsonMappingException, IOException {
		FileOutputStream fo=new FileOutputStream("src/main/webapp/images/"+email.split("@")[0]+"."+name.split("[.]")[1]);
		fo.write(image.getBytes());
	}
}
