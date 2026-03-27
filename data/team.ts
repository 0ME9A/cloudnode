import type { TTeams } from "@/type";

export const TEAM_MEMBERS: TTeams[] = [
  {
    id: "leadership",
    heading: "Leadership team",
    members: [
      {
        id: "kaushal",
        img: {
          src: "/images/team/kaushal.png",
          alt: "Mr. Kaushal",
        },
        name: "Mr. Kaushal",
        role: "Server Support",
        about: "",
        team: "leadership",
        follow: [],
      },
      {
        id: "nitish",
        img: {
          src: "/images/team/nitish.png",
          alt: "Mr. Nitish",
        },
        name: "Mr. Nitish",
        role: "Technical Support",
        about: "",
        team: "leadership",
        follow: [],
      },
      {
        id: "chandan",
        img: {
          src: "/images/team/chandan.png",
          alt: "Mr. Chandan",
        },
        name: "Mr. Chandan",
        role: "Marketing Expert",
        about: "",
        team: "leadership",
        follow: [],
      },
    ],
  },
];
