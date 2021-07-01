import { colorText, greenText, getYearsBetween, platformLogo } from '../../helpers/utils';

export function type_message(theme) {
  const platform = platformLogo();

  let logo = '<i style="font-size: 12px; margin-bottom: 5px" class="fa fa-apple fa-lg" aria-hidden="true"></i>';

  if (platform === 'ms') logo = '<i style="font-size: 12px; margin-bottom: 5px" class="fa fa-windows fa-lg" aria-hidden="true"></i>';
  if (platform === 'linux') logo = '<i style="font-size: 12px; margin-bottom: 5px" class="fa fa-linux fa-lg" aria-hidden="true"></i>';
  if (platform === 'android') logo = '<i style="font-size: 12px; margin-bottom: 5px" class="fa fa-android fa-lg" aria-hidden="true"></i>';

  const waitAndBreak = '^300 <br/>';
  const start = (path) => `<span 
       style="color: #08a6f3;font-size: 1.1em;"
       class="margin-left--10 font-size-14 !important">
          ${logo}
          <span style="font-size: 22px; margin-left: -5px; margin-right: -5px; color: ${theme.palette.text.primary};" >&#124;</span>
          <i style="font-size: 10px; margin-bottom: 5px" class="fa fa-folder-open" aria-hidden="true"></i>
          <span>
            /home/${path}: ${colorText('.', theme.palette.text.primary)}
          </span>
         </span>`;
  const myStack =
      start('Skillset?') + 
      waitAndBreak +
      greenText([
        'Elixir',
        'Nodejs',
        'ReactJS',
        'React Native',
        'Docker',
        'Kubernetes',
        'Azure',
        'GCP',
        'AWS'
      ]).join(',^200 ');
  const learning = waitAndBreak +
    start('Learning?') +
  waitAndBreak +  greenText(['Currently Learning Rust and Golang ', 'Also Interested in Haskell 😎']).join(',^200 ');
  const experience = getYearsBetween(new Date('February 1 2016 00:00'));
  const yearsOfExperience =
      waitAndBreak +
    start('Experience?') +
      waitAndBreak +
      greenText([experience]);
  const funGames = greenText(['Chess', 'Music', 'Yoga', 'Zumba', 'Oh! and Cooking 😋']).join(',^200 ');
  const fullFunTime = waitAndBreak + start('Funtime?') + waitAndBreak + funGames;
  return [myStack + yearsOfExperience + learning + fullFunTime];
}