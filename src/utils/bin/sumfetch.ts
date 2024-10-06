import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'original') {
    return `                                                  
             @@@@@@@@@@@@@                   Summary Display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         
        @@@                  @@@ @@         
         @|  @@@@@@@@@@@@@@@@   @@         
         @|                      @@         
`;
  } else {
    return `
                         ^\\    ^ 
                        / \\\\  / \\
                       /.  \\\\/   \\      |\\___/|         SUMMARY DISPLAY
    *----*           / / |  \\\\    \\  __/  O  O\\       ------------
    |   /          /  /  |   \\\\    \\_\\/  \\     \\        ABOUT
   / /\\/         /   /   |    \\\\   _\\/    '@___@        ${config.name}
  /  /         /    /    |     \\\\ _\\/       |U          linkedin.com/in/${config.social.linkedin}
  |  |       /     /     |      \\\\//        |           github.com/${config.social.github}
  \\  |     /_     /      |       \\\\  )   \\ _|_        ------------
  \\   \\       ~-./_ _    |    .- ; (  \\_ _ _,\\'         SOCIALS 
  ~    ~.           .-~-.|.-*      _        {-,       󰇮  ${config.email}
   \\      ~-. _ .-~                 \\      /\\'          ${config.ps1_hostname}
    \\                   }            {   .*           
     ~.                 '-/        /.-~----.          
       ~- _             /        >..----.\\\\
           ~ - - - - ^}_ _ _ _ _ _ _.-\\\\
`;
  }
};

export default sumfetch;
