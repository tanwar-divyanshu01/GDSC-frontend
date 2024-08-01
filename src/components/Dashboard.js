import React, { useState, useEffect } from "react";
import axios from "axios";
import EditAndDeleteForm from "./EditAndDelete";

export default function Dashboard(token) {
  const [projects, setProjects] = useState([]);

  console.log("dashboard loaded");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3001/projects", {
          headers: { "x-auth-token": token },
        });

        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjects();
  }, [token]);

  return (
    
    <div>
      <h1>Dashboard</h1>

      <ul>
        <button className="my-3">Add Project +</button>
        {projects
          ? projects.map((project) => (
              <>
                <p>________________________________________________</p>
                <img src={"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msyCE.img"} alt="thumbnail image" width="150" height="115"/>
                <br />
                <li>Project Id: {project._id}</li>
                <li key={project._id}>Name: {project.pname}</li>
                <li>Repo: {project.gitrepo}</li>
                
                <li>
                  Link to project:{" "}
                  {project.link ? project.link : "No link provided"}
                </li>
                <li>
                  Techstack Used:{" "}
                  {project.techstack
                    ? project.techstack
                    : "No techstack provided"}
                </li>
                <p>________________________________________________</p>
              </>
            ))
          : <p>"No projects here."</p>}
      </ul>
    </div>
  );
}
