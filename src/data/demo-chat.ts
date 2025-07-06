export interface ChatMessage {
  id: string;
  type: "user" | "bot";
  message: string;
  timestamp: Date;
  avatar?: string;
}

export const demo_messages: ChatMessage[] = [
  {
    id: "1",
    type: "user",
    message: "What Are The Latest Updates On My Favorite Team?",
    timestamp: new Date(Date.now() - 300000),
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    type: "bot",
    message:
      "Your Favorite Team, Real Madrid, Won 2-0 Today. Vinicius Junior Scored Both Goals!",
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: "3",
    type: "user",
    message: "That's amazing! Can you tell me more about the match highlights?",
    timestamp: new Date(Date.now() - 180000),
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    type: "bot",
    message:
      "The match was played at Santiago Bernabéu. Vinicius scored in the 23rd and 67th minutes. Real Madrid dominated possession with 68% and had 15 shots on target.",
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: "5",
    type: "user",
    message: "What about upcoming fixtures?",
    timestamp: new Date(Date.now() - 60000),
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    type: "bot",
    message:
      "Real Madrid's next match is against Barcelona in El Clásico this Saturday at 9:00 PM at Camp Nou!",
    timestamp: new Date(Date.now() - 30000),
  },
  {
    id: "7",
    type: "user",
    message: "Thanks for the info!",
    timestamp: new Date(Date.now()),
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "8",
    type: "bot",
    message: "You're welcome!",
    timestamp: new Date(Date.now() + 30000),
  },
];
