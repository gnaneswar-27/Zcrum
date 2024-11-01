import { getProject } from "@/actions/project";
import { notFound } from "next/navigation";
import SprintCreationForm from "../_components/create-sprint";

export default async function ProjectPage({ params }) {
  const { projectId } = params;
  const project = await getProject(projectId);
  if (!project) {
    notFound();
  }
  return (
    <div className="container mx-auto">
      <SprintCreationForm
        projectTitle={project.title}
        projectId={projectId}
        projectKey={project.key}
        sprintKey={project.sprints?.length + 1}
      />
      {project.sprints.length > 0 ? (
        <></>
      ) : (
        <div>create a sprint from button above</div>
      )}
    </div>
  );
}
