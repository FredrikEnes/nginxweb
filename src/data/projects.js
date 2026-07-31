import Bank from "../assets/images/bank.png";
import Fotball from "../assets/images/fotball.png";
import Thesis from "../assets/images/thesis.png";

export const projects = [
  {
    image: Bank,
    title: "Piggybank",
    description:
      "New banking service for Sparebanken Norge customers aged 7–14, built with TypeScript, C# and MongoDB. Guardians assign paid tasks, while kids set saving goals and can interact with their customizable saving buddy.",
    link: {
      url: "https://www.bankshift.no/nyheter/studentene-fikk-syv-uker-pa-a-skape-en-nettbank-for-barn-et-resultat-som-overgikk-forventingene/415204",
      label: "Read the article",
    },
  },
  {
    image: Fotball,
    title: "Hvem er spilleren?",
    description:
      `A norwegian game inspired by "Who Are Ya!". A game where the goal is to guess the correct Rosenborg BK player.`,
    link: {
      url: "https://hvemerspilleren.fredrikenes.no/",
      label: "Try the game!",
    },
  },
  {
    image: Thesis,
    title: "Bachelors thesis: Library of Things",
    description:
      `My bachelor thesis written together with two other students. Created a full-stack application for lending items. The application is internationalized using "i18-next" and utilizes Lightning Wallets for authentication. Awarded the Grasroots award at HVL EXPO 2024.`,
    link: {
      url: "https://hvlopen.brage.unit.no/hvlopen-xmlui/handle/11250/3143193",
      label: "Read the thesis",
    },
  },
];
