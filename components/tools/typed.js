import { whiteText, greenText, getYearsBetween } from '../../helpers/utils';

export function type_message() {
  const waitAndBreak = '^300 <br/>';
  const start =
      '<span style="color: #08a6f3;" class="margin-left--10 font-size-14 !important">➜:~</span>';
  const myStack =
      start +
      whiteText('Skill Set?') +
      waitAndBreak +
      greenText([
        'Elixir',
        'Nodejs',
        'ReactJS',
        'React Native',
        'Docker',
        'Kubernetes',
        'GCP',
        'AWS'
      ]).join(',^200 ');
  const learning = waitAndBreak +
  start +
  whiteText('Learning?') +
  waitAndBreak +  greenText(['Currently Learning Rust and Golang ', 'Also Interested in Haskell 😎😎']).join(',^200 ');
  const experience = getYearsBetween(new Date('February 1 2016 00:00'));
  const yearsOfExperience =
      waitAndBreak +
      start +
      whiteText('Experience?') +
      waitAndBreak +
      greenText([experience]);
  const funGames = greenText(['Chess', 'Music', 'Yoga', 'Zumba' , 'Oh! and Cooking 🤪🤪']).join(',^200 ');
  const fullFunTime = waitAndBreak + start + whiteText('My Fun time?') + waitAndBreak + funGames;
  return [myStack + yearsOfExperience + learning + fullFunTime];
}