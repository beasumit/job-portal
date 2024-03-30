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

    


}


let jobs=[
    new JobModel(
        1,
        "Actively hearing",
        "google",
        "SDE-1",
        "gurgaon sona road",
        "14-20 LPA",
        ["html","nodejs","css","express","mongodb"],
    )
]