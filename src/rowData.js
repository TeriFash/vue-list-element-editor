let idSequence = 11;

export const createGhostUser = () => {
  return {
    ghost: true,
    id: idSequence++,
    avatarUrl: "",
    username: "",
    name: "",
    following: false,
    verified: false
  };
};

export const isGhostUser = user => {
  return Boolean(user.ghost);
};

export const isBlankUser = user => {
  return !user.username && !user.name && !user.avatarUrl;
};

export default [
  {
    id: 0,
    avatarUrl: "/assets/img/khabib_nurmagomedov.jpg",
    username: "khabib_nurmagomedov",
    name: "Khabib Nurmagomedov",
    following: true,
    verified: true
  },
  {
    id: 1,
    avatarUrl: "/assets/img/itsdougthepug.jpg",
    username: "itsdougthepug",
    name: "Doug The Pug",
    following: true,
    verified: false
  },
  {
    id: 2,
    avatarUrl: "/assets/img/natgeotravel.jpg",
    username: "natgeotravel",
    name: "National Geographic Travel",
    following: false,
    verified: false
  },
  {
    id: 3,
    avatarUrl: "/assets/img/adele.jpg",
    username: "adele",
    name: "Adele",
    following: true,
    verified: true
  },
  {
    id: 4,
    avatarUrl: "/assets/img/instagram.jpg",
    username: "instagram",
    name: "Instagram",
    following: true,
    verified: false
  },
  {
    id: 5,
    avatarUrl: "/assets/img/oatly.jpg",
    username: "oatly",
    name: "Oatly",
    following: true,
    verified: false
  },
  {
    id: 6,
    avatarUrl: "/assets/img/lucaslepri.jpg",
    username: "lucaslepri",
    name: "LUCAS LEPRI",
    following: true,
    verified: false
  },
  {
    id: 7,
    avatarUrl: "/assets/img/nike.jpg",
    username: "nike",
    name: "nike",
    following: true,
    verified: true
  },
  {
    id: 8,
    avatarUrl: "/assets/img/commondeer.jpg",
    username: "commondeer",
    name: "COMMON DEER",
    following: false,
    verified: false
  },
  {
    id: 9,
    avatarUrl: "/assets/img/taylorswift.jpg",
    username: "taylorswift",
    name: "Taylor Swift",
    following: true,
    verified: false
  },
  {
    id: 10,
    avatarUrl: "/assets/img/leomessi.jpg",
    username: "leomessi",
    name: "Leo Messi",
    following: false,
    verified: false
  }
];
