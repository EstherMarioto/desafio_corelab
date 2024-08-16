import { TNote } from "../types/notes";

export const notesMock: TNote[] = [
  {
    id: 0,
    title: "Grocery List",
    description: "Buy milk, eggs, bread, and butter.",
    isFavorite: true,
  },
  {
    id: 1,
    title: "Workout Routine",
    description: "Morning exercise: 30 minutes running, 15 minutes stretching.",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Project Ideas",
    description: "Research on AI-powered web applications.",
    isFavorite: true,
  },
  {
    id: 3,
    title: "Meeting Notes",
    description: "Discuss the new project timeline and deliverables.",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Holiday Plans",
    description: "Plan a trip to the mountains during the winter break.",
    isFavorite: true,
  },
];
