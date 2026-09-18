import fs from "fs";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects() {
  if (!fs.existsSync(projectsDirectory)) return [];

  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames
    .filter((file) => file.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContents);
    });
}

export function getProjectBySlug(slug) {
  const filePath = path.join(projectsDirectory, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}