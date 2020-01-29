package SignUp;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.stereotype.Controller;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.mongodb.DuplicateKeyException;
import com.mongodb.MongoWriteException;
import com.token.JwtTokenUtil;

import Configuration.SecurityConfiguration;

@Controller
public class SignupController {
	@Autowired
	SignupRepository signuprepository;
	@Autowired
	JwtTokenUtil jwu;
	@Autowired
	SecurityConfiguration sc;
	public ResponseEntity<?> isLoggedIn(LoginDetails ld)
	{
		Map<String,String> mp=new HashMap<String,String>();
		SignupDetails sd=signuprepository.findByEmail(ld.getEmail());
		if(sd!=null)
		{
			if(!sc.passwordEncoder().matches(ld.getPassword(), sd.getPassword()))
				return new ResponseEntity<String>("Invalid Password", HttpStatus.BAD_REQUEST);
		}
		else
		{
			return new ResponseEntity<String>("Invalid Mailid", HttpStatus.BAD_REQUEST);
		}
		mp.put("token",jwu.generateToken(ld.getEmail()));
		mp.put("expiresIn", String.valueOf(5*3600));
		mp.put("userId", sd.getId());
		mp.put("username",sd.getName());
		mp.put("email",sd.getEmail());
		return ResponseEntity.ok(mp);
	}
    public ResponseEntity<String> postSignup(SignupDetails signup) {
		SignupDetails signup1=null;
		try
		{
		signup.setPassword(sc.passwordEncoder().encode(signup.getPassword()));
		signup1 = signuprepository.save(new SignupDetails(signup.getId(),signup.getName(),signup.getEmail()
				,signup.getGender(),signup.getPassword()));
		}
		catch (Exception e) {
			return ResponseEntity.badRequest().body("User Already Exists");
		}
		HttpHeaders hd=new HttpHeaders();
		hd.add("Authorization", "Bearer "+
				jwu.generateToken(signup.getEmail()));
		return ResponseEntity.ok("User Inserted Successfully");
	}
    public List<SignupDetails> getSignup()
    {
    	List<SignupDetails> al=signuprepository.findAll();
    	return al;
    }
    public String deleteSignup()
    {
    	try
    	{
    		signuprepository.deleteAll();
    	}
    	catch (Exception e) {
			return "Unable to delete";
		}
    	return "Deleted Successfully";
    }
}
