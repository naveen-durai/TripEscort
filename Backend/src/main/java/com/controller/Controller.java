package com.controller;
import java.io.*;
import java.util.*;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.mongodb.*;
import Feedback.*;
import Profile.*;
import SignUp.*;
import Tour.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.http.StreamingHttpOutputMessage.Body;
@ComponentScan(basePackages = {"SignUp","Profile","Feedback","Tour","Configuration","com.token"})
@EnableMongoRepositories(basePackages = {"SignUp","Profile","Feedback","Tour"})
@CrossOrigin(origins = "http://localhost:4200")
/*
developement server
@CrossOrigin(origins = "http://localhost:4200")
tomcat server
@CrossOrigin(origins = "http://localhost:8050/tripesc")
*/
@RestController
@RequestMapping("/api/tourist/")
public class Controller{
	@Autowired
	SignupController s;
	@Autowired
	ProfileController p;
	@Autowired
	TourController t;
	@Autowired
	FeedbackController f;
	@Autowired
	GridFsOperations go;
    @PostMapping("login")
    public ResponseEntity<?> LoggedIn(@RequestBody LoginDetails ld)
    {
    	return s.isLoggedIn(ld);
    }
    @GetMapping("signup")
    public List<SignupDetails> getAllSignupDetails() {
		return s.getSignup();
	}
	@PostMapping("signup")
	public ResponseEntity<String> postSignupDetails(@RequestBody SignupDetails signup) {
		return s.postSignup(signup);
	}
	@DeleteMapping("signup")
	public String deleteSignupDetails() {
		return s.deleteSignup();
	}
	@GetMapping("profile")
	public List<ProfileDetails> getAllProfileDetails() {
		return p.getProfile();
	}

	@PostMapping("createprofile")
	public ProfileDetails postProfileDetails(@RequestBody ProfileDetails profile) {
		return p.postProfile(profile);
	}
	@GetMapping("profileimage")
	public Profileimage getAllProfileimage(@RequestParam("email") String email) throws IOException {
		return p.getProfileimage(email);
	}

	@PostMapping("createprofileimage")
	public void postSProfileimage(@RequestParam("image") MultipartFile image,@RequestParam("email") String email,@RequestParam("name") String name) throws JsonParseException, JsonMappingException, IOException {
		p.postProfileimage(image, email, name);
	}
	@GetMapping("feedback")
	public List<FeedbackDetails> getAllFeedbackDetails() {
		return f.getFeedback();
	}
	@PostMapping("createfeedback")
	public FeedbackDetails postFeedbackDetails(@RequestBody FeedbackDetails feedback) {
		return f.postFeedbackDetail(feedback);
	}
	@GetMapping("tour")
	public Page<TourDetails> getAllTourDetails(@RequestParam(defaultValue="0") int page) {
		return t.getTourDet(page);
	}
	@GetMapping("filter")
	public Page<TourDetails> getAllFilterLocation(@RequestParam(defaultValue="")List<String> district,@RequestParam(defaultValue="")List<String> spottype,@RequestParam(defaultValue="0") int page,@RequestParam(defaultValue="") String filtertype) {
		return t.getFilters(district, spottype, page, filtertype);
	}
	@PostMapping("createtour")
	public TourDetails postTourDetails(@RequestBody TourDetails tour) {
		return t.postTourDet(tour);
	}
	@PostMapping("createrating")
	public TourratingDetails postTourratingDetails(@RequestBody TourratingDetails tourrating) {
		return t.postTourratingDet(tourrating);
	}
	@GetMapping("rating")
	public List<TourratingDetails> getAllTourratingDetails() {
		return t.getTourratingDet();
	}
}
