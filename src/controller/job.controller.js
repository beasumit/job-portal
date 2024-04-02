import JobModel from "../models/job.model.js";

export default class jobs {
  getJobsview(req, res) {
    res.render("job-seeker");
  }

  async getAllJobs(req, res) {
    try {
      const jobsDetails = JobModel.getJobs();
      res.render("jobs", { jobsDetails });
    } catch (error) {
      console.log("something error in jobs data", error);
    }
  }
  getUpdatejobView(req, res) {
    //1. if product exist then return view.
    const { id } = req.body;
    const jobFound = JobModel.getById(id);
    if (jobFound) {
      res.render("update-jobs");
      //2. else return error
    } else {
      res.status(401).send("job not found.");
    }
  }

  async postAddJob(req, res) {
    try {
      console.log(req.body);
      //add job to database
      JobModel.addJobs(req.body);
      let newJobs = JobModel.getJobs();
      res.render("add-jobs", { newJobs });
    } catch (error) {
      console.error("Error in adding Job: ", error);

      res.redirect("add-jobs");
    }
  }

  // async postAllJobs(req, res) {
  //   try {
  //   } catch (error) {}
  // }
}
