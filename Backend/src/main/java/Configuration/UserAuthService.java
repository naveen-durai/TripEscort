package Configuration;

import org.springframework.stereotype.Component;
import SignUp.LoginDetails;
import SignUp.SignupDetails;
import SignUp.SignupRepository;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
@Component
public class UserAuthService{ //implements UserDetailsService{
//	  @Autowired
//	  private SignupRepository repository;
//
//	  @Override
//	  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//	    User user =repository.findByEmail(email);
//
//	    if(user == null) {
//	      throw new UsernameNotFoundException("User not found");
//	    }
//
//	    List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("user"));
//
//	    return new User(user.getEmail(),user.getPassword(), authorities);
//	  }
	}