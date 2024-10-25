// List of commands that do not require API calls


import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ', ';
    }
  }
  c = c.substring(0, c.length - 2);
  return `Welcome! Here are all the available commands:
\n${c}\n
Type 'sumfetch' to display my summary!
`;
};

// Redirection
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };

// About
// export const aboutme = async (args: string[]): Promise<string> => {
//   return `Hi, I am ${config.name}. 
// Welcome to my website!
// More about me:
// 'sumfetch' - short summary.
// 'resume' - my latest resume.
// 'readme' - my github readme.`;
// };

export const funfacts = async (args: string[]): Promise<string> => {
  return `List of places fun facts about me:\n
Kai ig
6'5 ig
Nonchalant ig
Toji build ig
Radiohead ig
`
  ;
};

export const travel = async (args: string[]): Promise<string> => {
  return `List of places I want to visit:\n
US NATIONAL PARKS
---------------
Crater Lake
Denali
Glacier
Grand Canyon
Grand Teton
Great Sand Dunes
Haleakala
Mt. Rainier
Olympic
Smoky Mountains
Yellowstone
Zion

COUNTRIES
---------------
Belgium
Chile
China
Ghana
Japan
Kyrgyzstan
Morocco
Nepal
Switzerland
Thailand
  `
  ;
};

export const foods = async (args: string[]): Promise<string> => {
  return `List of my favorite food:\n
Baked Mac n Cheese
Biriyani
Burrito
Chicken Adobo
Chicken Alfredo
Chicken Teriyaki
Chicken Tikka
Fried Chicken
Fried Rice
Gyro
Idli
Jollof Rice (Ghanaian)
Lasagna
Paneer Butter Masala
Payasam
Pizza
Quesadilla
Ramen
Sambar
Shawarma
Sushi
Tehri
  `
  ;
};

export const movies = async (args: string[]): Promise<string> => {
  return `List of my favorite movies:\n
Dune
Interstellar
iRobot
Kung Fu Panda
Parasite
Perks of Being A Wallflower
Puss In Boots: The Last Wish
Ratatouille
Silent Voice
The Batman
The Emporer's New Groove
Uncut Gems
Up
Wall-E
Whiplash
  `
  ;
};

export const games = async (args: string[]): Promise<string> => {
  return `List of my favorite games:\n
Batman: Arkham Asylum
Batman: Arkham Knight
DOOM: Eternal
Dark Souls III
Elden Ring
Geometry Dash
Ghost of Tsushima
God of War
Hades
Halo 4
Hollow Knight
Injustice: Gods Among Us
Overwatch
Red Dead Redemption 2
Sekiro: Shadows Die Twice
Stray
Titanfall 2
Ultrakill
`
  ;
};

export const music = async (args: string[]): Promise<string> => {
  return `List of my favorite music artists:\n
21 Savage
Billie Eilish
Boa
Crying City
Deftones
Djo
Green Day
Jhene Aiko
Kali Uchis
Kendrick Lamar
Laufey
Linkin Park
Los Retros
MF Doom
Mac DeMarco
Nirvana
Panchiko
Paramore
Radiohead
System Of A Down
Tame Impala
The Marias
Tyler, The Creator
`
  ;
};

// export const resume = async (args: string[]): Promise<string> => {
//   window.open(`${config.resume_url}`);
//   return 'Opening resume...';
// };

// // Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
// export const email = async (args: string[]): Promise<string> => {
//   window.open(`mailto:${config.email}`);
//   return `Opening mailto:${config.email}...`;
// };

// export const github = async (args: string[]): Promise<string> => {
//   window.open(`https://github.com/${config.social.github}/`);

//   return 'Opening github...';
// };

// export const linkedin = async (args: string[]): Promise<string> => {
//   window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

//   return 'Opening linkedin...';
// };

// Search
// export const google = async (args: string[]): Promise<string> => {
//   window.open(`https://google.com/search?q=${args.join(' ')}`);
//   return `Searching google for ${args.join(' ')}...`;
// };

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// // Typical linux commands
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

// export const whoami = async (args: string[]): Promise<string> => {
//   return `${config.ps1_username}`;
// };

// export const ls = async (args: string[]): Promise<string> => {
//   return `a
// bunch
// of
// fake
// directories`;
// };

// export const cd = async (args: string[]): Promise<string> => {
//   return `unfortunately, i cannot afford more directories.
// if you want to help, you can type 'donate'.`;
// };

// export const date = async (args: string[]): Promise<string> => {
//   return new Date().toString();
// };

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

// export const sudo = async (args?: string[]): Promise<string> => {
//   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
//   return `Permission denied: with little power comes... no responsibility? `;
// };

// Banner
export const banner = (args?: string[]): string => {
  return `
███████╗ █████╗ ████████╗██████╗ ███████╗██╗   ██╗ █████╗ ██████╗ ███████╗
██╔════╝██╔══██╗╚══██╔══╝██╔══██╗██╔════╝╚██╗ ██╔╝██╔══██╗╚════██╗╚════██║
███████╗███████║   ██║   ██████╔╝█████╗   ╚████╔╝ ███████║ █████╔╝    ██╔╝
╚════██║██╔══██║   ██║   ██╔══██╗██╔══╝    ╚██╔╝  ██╔══██║██╔═══╝    ██╔╝ 
███████║██║  ██║   ██║   ██║  ██║███████╗   ██║   ██║  ██║███████╗   ██║  
╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝   ╚═╝                                                                                                                                                                   

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
};
