export interface Project {
  name: string;
  description: string;
  image: string;
  type: ProjectType;
  technos: string[];
  website: string;
}

export enum ProjectType {
  VideoGames = "video_games",
  MobileApp = "mobile_app",
  WebApp = "web_app",
}
