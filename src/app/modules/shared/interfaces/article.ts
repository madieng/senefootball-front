import { User } from "./user";
export interface Article {
  id: number;
  title: string;
  description: string;
  content?: string;
  slug: string;
  createdAt: string;
  caption: string;
  createdBy: User;
}
