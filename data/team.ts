import type { TTeams } from "@/type";

export const TEAM_MEMBERS: TTeams[] = [
  {
    id: "leadership",
    heading: "Leadership team",
    members: [
      {
        id: "alex",
        img: {
          src: "/images/team/alex.png",
          alt: "Alex Rivera",
        },
        name: "Alex Rivera",
        role: "Server Support",
        about: "",
        team: "leadership",
        follow: [],
      },
      {
        id: "jordan",
        img: {
          src: "/images/team/jordan.png",
          alt: "Jordan Lee",
        },
        name: "Jordan Lee",
        role: "Technical Support",
        about: "",
        team: "leadership",
        follow: [],
      },
      {
        id: "robort",
        img: {
          src: "/images/team/robort.png",
          alt: "Robort Chen",
        },
        name: "Robort Chen",
        role: "Marketing Expert",
        about: "",
        team: "leadership",
        follow: [],
      },
    ],
  },
];
