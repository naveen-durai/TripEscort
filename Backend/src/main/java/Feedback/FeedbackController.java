package Feedback;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class FeedbackController {
	@Autowired
	FeedbackRepository feedbackrepository;
	public List<FeedbackDetails> getFeedback() {
		List<FeedbackDetails> feedback = new ArrayList<FeedbackDetails>();
		System.out.println(feedbackrepository);
		feedbackrepository.findAll().forEach(feedback::add);
		return feedback;
	}
	public FeedbackDetails postFeedbackDetail(@RequestBody FeedbackDetails feedback) {
		System.out.println("feedback");
		FeedbackDetails f1 = feedbackrepository.save(new FeedbackDetails(feedback.getId(),feedback.getName(),feedback.getMail(),feedback.getPhoneno(),feedback.getMsg()));
		return f1;
	}
}
