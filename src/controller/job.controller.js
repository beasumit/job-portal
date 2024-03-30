import JobModel from "../models/job.model.js";

export default class jobs {
  getJobsview(req, res) {
    res.render("job-seeker");
  }

  async getAllJobs(req, res) {
    try{
        const jobsDetails = JobModel.getJobs();
        res.render("jobs", { jobsDetails });

    }catch(error){
        console.log("something error in jobs data",error);
    }
  }

  async postAllJobs(req,res){
try {
  
} catch (error) {
  
}
  }
}
