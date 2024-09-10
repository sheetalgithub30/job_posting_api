import express from 'express';

let jobs = [{
    "id": 1,
    "job_title": "Compensation Analyst",
    "address": "Apt 94",
    "company_name": "Cogibox"
  }, {
    "id": 2,
    "job_title": "Chief Design Engineer",
    "address": "Apt 629",
    "company_name": "Kazu"
  }, {
    "id": 3,
    "job_title": "Administrative Officer",
    "address": "PO Box 45335",
    "company_name": "Skinix"
  }];

const app = express();
const PORT = 6969;
app.use(express.json());
app.use(express.urlencoded({extended :false}));

//get all jobs
app.get("/getjobs",(req,res)=>{
    return res.json(jobs);
})

//create a job
app.post("/addjob",(req,res)=>{
    const new_job = req.body;
    jobs.push(new_job);
    res.send(jobs);
})

//update a job
app.put("/updatejob/:id",(req,res)=>{
    const {id} = req.params;
    const dataToUpdate = req.body;
    const updateJob = jobs.map((job)=>{
        return job.id === Number(id) ? dataToUpdate :job;
    })

    res.send(updateJob);
})

//delete a job
app.delete("/deletejob/:id",(req,res)=>{
    const {id} = req.params;
    const remainingJobs = jobs.filter((job)=>{
        return job.id !== Number(id) ;
    })

    res.send(remainingJobs);
})

app.listen(PORT,()=>{
    console.log("Server started at",PORT)
})





