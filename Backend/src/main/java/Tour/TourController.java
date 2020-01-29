package Tour;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TourController{
	@Autowired
	TourRepository tourrepository;
	@Autowired
	TourratingRepository tourratingrepository;
	@SuppressWarnings("deprecation")
	public Page<TourDetails> getTourDet(@RequestParam(defaultValue="0") int page) {
		return tourrepository.findAll(new PageRequest(page,6));
	}
	public TourDetails postTourDet(@RequestBody TourDetails tour) {
		System.out.println("feedback");
		TourDetails t1 = tourrepository.save(new TourDetails(tour.getId(),tour.getSpotname(),tour.getLocation(),tour.getDistrict(),tour.getSpottype(),tour.rating));
		return t1;
	}
	public TourratingDetails postTourratingDet(@RequestBody TourratingDetails tourrating) {
		int avgrating=tourrating.getRating();
		float avg;
		System.out.println(tourrating.getRating()+" "+tourrating.mailid+" "+tourrating.spotname);
		int count=0,count1=1,rating=0;
		List<TourratingDetails> tourrating1 = new ArrayList<TourratingDetails>();
		TourDetails tour = tourrepository.findBySpotname(tourrating.getSpotname());
		tourratingrepository.findAll().forEach(tourrating1::add);
		for(int i=0;i<tourrating1.size();i++)
		{ 
			if(tourrating1.get(i).mailid.equals(tourrating.getMailid()) && tourrating1.get(i).spotname.equals(tourrating.getSpotname()))
			{
				if(tourrating1.get(i).rating==0)
				{
					rating=tourrating.getRating();
					count++;
				}
				else
				 rating=tourrating1.get(i).rating;
			}
			if(!tourrating1.get(i).mailid.equals(tourrating.getMailid()) && tourrating1.get(i).spotname.equals(tourrating.getSpotname()))
			{
				avgrating+=tourrating1.get(i).rating;
				count1++;
			}
		}
		if(count1!=1)
		{
			avg=avgrating/count1;
			tour.setRating(avg);
		}
		if(count1==1)
		{
			tour.setRating(tourrating.getRating());
		}
		if(count!=0)
		{
			tourrating.setRating(rating);
			tourratingrepository.deleteBySpotname(tourrating.getSpotname());
		}
		System.out.println(count+" "+tourrating.getRating());
		count=0;count1=0;
		tourrepository.save(new TourDetails(tour.getId(),tour.getSpotname(),tour.getLocation(),tour.getDistrict(),tour.getSpottype(),tour.rating));
		TourratingDetails t1 = tourratingrepository.save(new TourratingDetails(tourrating.getId(),tourrating.getMailid(),tourrating.getSpotname(),tourrating.getRating()));
		return t1;
	}
	public List<TourratingDetails> getTourratingDet() {
		List<TourratingDetails> tourrating = new ArrayList<TourratingDetails>();
		tourratingrepository.findAll().forEach(tourrating::add);
		return tourrating;
	}
	@SuppressWarnings("deprecation")
	public Page<TourDetails> getFilters(@RequestParam(defaultValue="")List<String> district,@RequestParam(defaultValue="")List<String> spottype,@RequestParam(defaultValue="0") int page,@RequestParam(defaultValue="") String filtertype) {
		Page<TourDetails> tour1=null;
		if(district.size()==0 && spottype.size()==0)
		{
			if(filtertype.equals("popularity"))
			  tour1=tourrepository.findAll(new PageRequest(page,6,Sort.Direction.DESC,"rating"));
			else
			  tour1=tourrepository.findAll(new PageRequest(page,6));
		}
		else
		{
		try {
		List<TourDetails> tour=new ArrayList<TourDetails>();
		List<TourDetails> districtlist=new ArrayList<TourDetails>();
		List<TourDetails> spottypelist=new ArrayList<TourDetails>();
		List<TourDetails> combinedlist=new ArrayList<TourDetails>();
		for(int i=0;i<district.size();i++)
			 tourrepository.findBydistrict(district.get(i)).forEach(districtlist::add);
		for(int i=0;i<spottype.size();i++)
			tourrepository.findBySpottype(spottype.get(i)).forEach(spottypelist::add);
		if(district.size()!=0 && spottype.size()!=0)
		{
			for(int i=0;i<districtlist.size();i++)
			{
		      for(int j=0;j<spottypelist.size();j++)
		      {
		        if(districtlist.get(i).spotname.equals(spottypelist.get(j).spotname))
		        	combinedlist.add(districtlist.get(i));
		      }
			}
			tour=combinedlist;
		}
		else if(district.size()!=0)
		{
			tour=districtlist;
		}
		else if(spottype.size()!=0)
		{
		    tour=spottypelist;
		}
		if(filtertype.equals("popularity"))
		{
			Comparator<TourDetails> compareByRating = new Comparator<TourDetails>() {
			    @Override
			    public int compare(TourDetails o1, TourDetails o2) {
			        return String.valueOf(o1.getRating()).compareTo(String.valueOf(o2.getRating()));
			    }
			};
			Collections.sort(tour,compareByRating.reversed());
		}
		PageRequest p = new PageRequest(page,6); 
		int start = (int) p.getOffset();
		int end = (start + p.getPageSize()) > tour .size() ? tour .size() : (start + p.getPageSize());        
		int totalRows = tour .size();
		tour1=new PageImpl<TourDetails>(tour .subList(start, end), p, totalRows);
		}
		catch (Exception e) {
			// TODO: handle exception
		}
	    }
		return tour1;
	}
}
