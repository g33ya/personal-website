import loadProjectImages from '../utils/imageLoader';

import soundmateStamp from '../assets/project_stamps/soundmate_stamp.png';
import callCompanionStamp from '../assets/project_stamps/call_companion_stamp.png';
import bubbleUpStamp from '../assets/project_stamps/bubble_up_stamp.png';
import careerCatalystStamp from '../assets/project_stamps/career_catalyst_stamp.png';
import perceptionTrialStamp from '../assets/project_stamps/perception_trial_stamp.png';

const soundmateImages = loadProjectImages('soundmate');
const callCompanionImages = loadProjectImages('call_companion');
const bubbleUpImages = loadProjectImages('bubble_up');
const careerCatalystImages = loadProjectImages('career_catalyst');
const perceptionTrialImages = loadProjectImages('perception_trial');

export const projects = [
  {
    id: 'soundmate',
    stamp: soundmateStamp,
    title: 'SoundMate',
    role: 'Full-Stack Developer (backend-focused)',
    description:
      'SoundMate is a full-stack music platform designed to help users connect through shared music taste, listening habits, and events.',
    images: soundmateImages,
    concept:
      'SoundMate was the first full-stack website I built as part of a three-person team in an Advanced Web Technologies course. Our goal was to help people connect through their music taste! Beyond showing compatibility and listening habits, we wanted to create a space where users could find concert buddies, organize meetups, and build connections.\n\nAs a team, we planned the user experience from the ground up, creating wireframes, designing the platform, and bringing the idea to life. For me, one of the most valuable parts of this project was learning how different pieces of a full-stack application work together. It was my first experience building a project with a connected backend and collaborating through a more structured code review process, both of which taught me a lot about developing software as part of a team.\n\nWhile the project was successful as a class project, we later discovered a limitation with Spotify’s API approval process that prevented us from making the platform publicly available. Even so, the experience gave me a strong foundation in collaborative development and turning an idea into a working product!',
    type: 'Full-Stack Web App, Music/Social Platform',
    tech:
      'TypeScript, React, Cloudflare Workers, NestJS, Prisma, Supabase, Auth0, Spotify Developer API, Render',
  },
  {
    id: 'career-catalyst',
    stamp: careerCatalystStamp,
    title: 'Career Cat-alyst',
    role: 'Frontend Developer',
    links: [],
    description:
      'Career Cat-alyst is an AI-powered career quiz that helps users explore potential career paths based on their interests and preferences.',
    images: careerCatalystImages,
    concept:
      'Career Cat-alyst was a project I built alongside three other developers as part of our Introduction to Software Engineering course. Our goal was to create a career quiz that could help users explore potential career paths based on their interests and preferences.\n\nI was responsible for designing and implementing the Detailed Questions page, which featured longer-form situational questions. I enjoyed creating the prompts and answer choices, as well as adding animations to make the experience feel more engaging. This project was my first opportunity to really focus on UI design, and I loved helping create the fun, artsy aesthetic that defined the site.\n\nWe used OpenAI’s API to generate personalized career recommendations based on users’ responses, which was also my first experience working with APIs. Looking back, it was a great learning experience that introduced me to collaborative software development, user interface design, and API integration.',
    type: 'Web App, Career Exploration Tool',
    tech: 'TypeScript, React, OpenAI API, Bootstrap, GitHub Pages',
  },
  {
    id: 'bubble-up',
    stamp: bubbleUpStamp,
    title: 'Bubble Up',
    role: 'Gameplay & UI Developer',
    description:
      'Bubble Up is an educational game about understanding and managing imposter syndrome through narrative choices and daily-life gameplay.',
    images: bubbleUpImages,
    concept:
      'Bubble Up was a project I built alongside three other developers as part of an educational game development course. The game is designed to help players better understand and manage imposter syndrome through conversations with customers as a boba shop worker. After work, players manage life as a student. It was the first video game I have worked on! Between character development, dialogue writing, and learning Unity, I had to step outside of my comfort zone and experiment.\n\nI was responsible for designing and implementing the portion of the game that takes place after work. In this section, players must manage their energy and stress levels while completing assignments and daily activities. I enjoyed figuring out the UI and balancing the different gameplay mechanics. For example, activities that reduced stress would also consume energy, meaning players had to make thoughtful decisions about how they spent their time.\n\nOne of my favorite parts of the project was drawing from my own experiences as a college student and translating them into gameplay that felt relatable and realistic. Seeing those ideas come to life in a playable game made this a rewarding project to work on!',
    type: 'Game, Educational Interactive Narrative',
    tech: 'Unity, C#',
  },
  {
    id: 'call-companion',
    stamp: callCompanionStamp,
    title: 'Call Companion',
    role: 'Mobile App Developer',
    links: [
      {
        label: 'Demo Video',
        url: 'https://www.youtube.com/watch?v=H0g-sfvb6cY',
      },
    ],
    description:
      'Call Companion is an accessibility-focused mobile app that helps users capture key details during phone calls without relying on call recording.',
    images: callCompanionImages,
    concept:
      'Call Companion was a project I built alongside another developer as part of an assistive technology course. It was one of my favorite classes as it challenged me to think differently about accessibility and how thoughtful design can make technology more inclusive.\n\nCall Companion was designed to act as a digital notebook during phone calls, helping users with limited dexterity or fatigue track key information. The app allows users to record details such as event names, dates, times, and locations through simple button-based interactions. Users can also create custom event names and locations in advance, making information entry faster and more accessible during a call. Users can choose between reminders from the application, or exporting the event to their Google Calendar.\n\nOne of the biggest challenges was designing the app around the legal concerns of recording phone calls. Rather than relying on live call transcripts, we focused on creating an alternative solution that allowed users to capture key information without recording conversations! I enjoyed the challenge of figuring out how to simplify features to create an efficient and easy-to-use app.',
    type: 'Mobile App, Accessibility/Support Tool',
    tech: 'Flutter, Dart, Tech Design, Flutter Local Notifications',
  },
  {
    id: 'perception-experiment',
    stamp: perceptionTrialStamp,
    title: 'Perception Research Trial',
    role: 'Research Assistant / Experiment Designer',
    links: [],
    description:
      'Perception Research Trial is a research study exploring how object shapes are visually represented in isolation versus relational spatial contexts.',
    images: perceptionTrialImages,
    concept:
      'I worked with the University of Delaware’s Perception and Language (PAL) Lab to help design a research study exploring how object shapes are visually represented in different spatial contexts. This project was unique because it allowed me to combine my computer science background with my cognitive science minor. I really enjoyed the opportunity to bring together both fields and apply them to a real research question!\n\nOur hypothesis was that object shape is represented differently when viewed in relational contexts compared to when it is viewed in isolation. Specifically, we predicted that participants would be more sensitive to shape changes when objects were presented in isolation than when they appeared within a relational context. To test this, we designed a change detection experiment. Participants were shown an object, followed by a visual mask that briefly obscured it, and then the object again with the possibility of a subtle modification. This process was repeated for both isolated objects and objects presented within a relational context. Participants were tasked with determining whether the object had changed.\n\nThis was a completely new experience that introduced me to the research process from the ground up. I reviewed related research papers, helped design the trial structure, and created the object stimuli modifications used throughout the study. A major challenge was determining how subtle or dramatic each modification should be in order to produce measurable results. To address this, I designed and implemented a pilot experiment using isolated objects to determine the level of change participants could reliably detect.\n\nThrough my research, I learned that people tend to be more sensitive to changes in horizontal shape dimensions than vertical ones, which informed the creation of ten levels of modifications across sixteen objects. Beyond the technical work, I gained a much deeper appreciation for experimental design, cognitive science research, and the process of turning a hypothesis into a measurable study!',
    type: 'Research Study, Cognitive Science Experiment',
    tech: 'JavaScript, jsPsych',
  },
];