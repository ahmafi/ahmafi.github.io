import Image from 'next/image';
import myImage from '@/app/Amirhossein-Mafi.webp';
import {
  MdEmail,
  MdLightbulbCircle,
  MdLocationOn,
  MdSmartphone,
  MdWork,
} from 'react-icons/md';
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaUserCircle,
  FaUserGraduate,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

export default function Resume() {
  return (
    <div className="w-full flex items-center bg-slate-950 justify-center">
      <div className="w-[21cm] h-[29.7cm] bg-slate-200 flex text-slate-950 px-[1.25cm] py-[1.27cm]">
        <div className="flex h-full flex-col items-center w-1/3">
          <div className="w-5/6 border-[4px] p-1 border-indigo-800 rounded-full">
            <Image
              width={400}
              height={400}
              src={myImage}
              alt="Avatar of Amirhossein Mafi"
              className="rounded-full"
            />
          </div>
          <div className="mb-1 text-2xl font-bold">Amirhossein Mafi</div>
          <div className="mb-5 text-lg font-semibold">Front-End Developer</div>
          <div className="self-stretch flex flex-col gap-1 mb-7">
            <Info Icon={MdLocationOn} text={'Tehran'} />
            <Info
              Icon={MdSmartphone}
              text={'0993 559 9530'}
              link={'tel:09935599530'}
            />
            <Info
              Icon={MdEmail}
              text={'amir77mafi@gmail.com'}
              link={'mailto:amir77mafi@gmail.com'}
            />
            <Info
              Icon={FaGithub}
              text={'github.com/ahmafi'}
              link={'https://github.com/ahmafi'}
            />
            <Info
              Icon={FaStackOverflow}
              text={'stk.so/amir'}
              link={'https://stackoverflow.com/users/4725780/amir'}
            />
            <Info
              Icon={FaLinkedin}
              text={'LinkedIn'}
              link={'https://www.linkedin.com/in/amirhossein-mafi-6ab9821a2/'}
            />
          </div>
          <SectionHeader Icon={FaUserCircle} text={'About Me'} />
          <div className="mb-3 font-medium text-center">
            {
              "If you're looking for a front-end developer who is passionate about creating cutting-edge web application, you have found the right person. I'm 25 y/o and I have been programming since I was 19. I have tried different fields in computer engineering and I have found web development a suitable choice for me."
            }
          </div>
          <SectionHeader Icon={FaUserGraduate} text={'Education'} />
          <div className="font-medium text-center">
            {"Bachelor's degree in Computer Engineering"}
          </div>
          <div className="font-medium">{'(2017 - 2021)'}</div>
        </div>
        <div className="w-2/3 pl-6">
          <SectionHeader Icon={MdLightbulbCircle} text={'Skills'} />
          <Skills
            title="Fundamentals"
            skills={[
              'HTML',
              'CSS',
              'JavaScript(ES6+)',
              'TypeScript',
              'Responsive Design',
              'Jest',
              'zod',
              'Three.js',
              'GLSL',
              'REST API',
              'Websocket',
              'Clean Code',
            ]}
          />
          <Skills
            title="React.js"
            skills={[
              'Next.js',
              'SSR',
              'Server Components',
              'Next App Router',
              'React Query',
              'jotai',
              'React Three',
              'Storybook',
              'Hooks',
              'Styled-Components',
            ]}
          />
          <Skills
            title="Tools"
            skills={[
              'Trello',
              'Git',
              'Github',
              'Docker',
              'Webpack',
              'Vim',
              'Linux',
              'VSCode',
              'Swagger',
              'Postman',
              'Figma',
            ]}
          />
          <SectionHeader Icon={MdWork} text={'Experience'} />
          <Job
            title={'Front-End Developer / Lead'}
            company="DigiNote · Full-time"
            companyLink="https://www.linkedin.com/company/diginote"
            date="Aug 2022 - July 2023 · 1 yr"
            desc="DigiNote is an international startup with the focus on reducing the environmental impact of businesses. I was working on a digital document management system. I was also the lead for the Front-End development team for about 4 months."
            skills={[
              'Next.js',
              'TypeScript',
              'JavaScript',
              'Tailwind',
              'React Query',
              'jotai',
              'React Spring',
              'Storybook',
              'Three.js',
              'GLSL',
            ]}
          />
          <Job
            title={'Full-Stack Developer'}
            company="Lahzenegar · Contract"
            date="Jan 2022 - Mar 2022 · 3 mos"
            desc="Developing a web scraping system with Node.js and a user interface for managing this scraper using React.js"
            skills={[
              'JavaScript',
              'React.js',
              'Node.js',
              'React Router',
              'JSDoc',
              'Jest',
              'Express',
              'REST API',
              'OpenAPI',
              'Postman',
              'Webpack',
            ]}
          />
          <Job
            title={'Freelance Developer'}
            date="Nov 2021 - Jul 2022 · 9 mos"
            desc="Developing small projects from different clients on different freelancing platforms like Ponisha"
            skills={[
              'JavaScript',
              'Node.js',
              'React.js',
              'Express',
              'REST API',
              'Postman',
              'C/C++',
              'Curl',
            ]}
          />
        </div>
      </div>
    </div>
  );
}

type InfoProps = {
  Icon: IconType;
  text: string;
  link?: string;
};

function Info(props: InfoProps) {
  const { Icon } = props;
  const IconStyled = <Icon className="mr-1 w-6 h-6 text-indigo-900" />;

  return props.link ? (
    <a className="flex items-center" href={props.link}>
      {IconStyled}
      <div className="font-semibold">{props.text}</div>
    </a>
  ) : (
    <div className="flex items-center">
      {IconStyled}
      <div className="font-semibold">{props.text}</div>
    </div>
  );
}

type SectionHeaderProps = {
  Icon: IconType;
  text: string;
};

function SectionHeader(props: SectionHeaderProps) {
  const { Icon } = props;

  return (
    <div className="mb-2 flex w-full items-center gap-1">
      <Icon className="w-6 h-6 text-indigo-900" />
      <div className="text-lg font-semibold text-indigo-950">{props.text}</div>
      <div className="grow h-1 translate-y-[2px] border-2 border-indigo-900 rounded-full"></div>
    </div>
  );
}

type JobProps = {
  title: string;
  company?: string;
  companyLink?: string;
  date: string;
  desc: string;
  skills: string[];
};

function Job(props: JobProps) {
  return (
    <div className="mb-3">
      <div className="text-xl font-semibold">{props.title}</div>
      {props.company && (
        <a href={props.companyLink} className="font-medium">
          {props.company}
        </a>
      )}
      <div className="font-medium mb-2 text-sm">{props.date}</div>
      <div className="text-sm mb-2">{props.desc}</div>
      <div className="flex gap-2 flex-wrap">
        {props.skills.map((skill) => (
          <div
            className="font-semibold border-2 border-indigo-900 px-2 py-1 rounded-md text-xs"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

type SkillsProps = {
  title: string;
  skills: string[];
};

function Skills(props: SkillsProps) {
  return (
    <div className="mb-1">
      <div className="text-sm font-semibold">{props.title}</div>
      <div className="flex gap-2 flex-wrap">
        {props.skills.map((skill) => (
          <div
            className="font-semibold border-2 border-indigo-900 px-2 py-1 rounded-md text-xs"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
