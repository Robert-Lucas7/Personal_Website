import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Markdown from "marked-react";

function ProjectGrid(props) {
    
    return (
        <div className='mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 '>
            {
                props.projects.map((project) => (
                    <ProjectCard title={project.title} brief_desc={project.brief_desc} handler={() => props.projectCardClicked(project.title)} />

                ))
            }

        </div>
    )
}
export default ProjectGrid;