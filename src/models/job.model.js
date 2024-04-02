export default class JobModel{
    constructor(id,active,cname,techpost,caddress,salary,skill){
        this.id=id;
        this.active=active;
        this.cname=cname;
        this.techpost=techpost;
        this.caddress=caddress;
        this.salary=salary;
        this.skill=skill;
        
    }
    static getJobs(){
        return jobs;
    }

    static addJobs(userJobs){
        
            
            
            let startUser = new JobModel(
                userJobs.length+1,
                userJobs.active,
                userJobs.cname,
                userJobs.techpost,
                userJobs.caddress,
                userJobs.salary,
                userJobs.skill
                )
                
                jobs.push(startUser)
            
        }


    static getById(id){
        return jobs.find((newJob)=>newJob.id==id);

    }

    


}


let jobs=[
    new JobModel(
        1,
        "Actively hearing",
        "google",
        "SDE-1",
        "gurgaon sona road",
        "14-20",
        ["html","nodejs","css","express","mongodb"],
    )
]