import { whiteText, greenText, getYearsBetween } from "../../helpers/utils";

export function type_message() {
    const waitAndBreak = "^700 <br/>";
    const start =
      '<span class="margin-left--10 color-blue font-size-14 !important">➜:~</span>';
    const myStack =
      start +
      whiteText("Skill Set?") +
      waitAndBreak +
      greenText([
        "Nodejs",
        "ReactJS",
        "Elixir",
        "Docker",
        "Python for Data",
        "Kubernetes",
        "GCP",
        "Heroku",
        "AWS."
      ]).join(",^500 ");
    const experience = getYearsBetween(new Date("February 1 2016 00:00"));
    const yearsOfExperience =
      waitAndBreak +
      start +
      whiteText("Experience?") +
      waitAndBreak +
      greenText([experience]);
    const funGames = greenText(["Chess", "Music", "Dancing."]).join(",^500 ");
    const fullFunTime = waitAndBreak + start + whiteText("My Fun time?") + waitAndBreak + funGames;
    return [myStack + yearsOfExperience + fullFunTime];
  }