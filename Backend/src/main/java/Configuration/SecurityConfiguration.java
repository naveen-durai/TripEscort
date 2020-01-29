package Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
  @Value("${angular.url}")
  String url;
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .csrf().disable()
      .authorizeRequests()
      .antMatchers("/api/tourist/a").hasRole("User")
      .and().formLogin().loginPage("/login.jsp")
      .failureUrl("/login.jsp?error=1").loginProcessingUrl("/api/tourist/profile");
  }
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
  
  @Override
  public void configure(AuthenticationManagerBuilder builder) throws Exception {
	  builder.inMemoryAuthentication().withUser("naveen183")
		.password("naveen").roles("USER");
  }
}
