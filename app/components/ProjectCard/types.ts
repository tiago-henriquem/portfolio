export interface Project {
  title: string;
  description: string;
  projectCover: string;
  projectData?: {
    url: string;
    redirectType?: "_self" | "_blank";
  }
}