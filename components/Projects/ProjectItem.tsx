import style from './ProjectItem.module.scss';
import Link from 'next/link';
import GithubIcon from '../common/icons/GithubIcon';
import NotionIcon from '../common/icons/NotionIcon';
import WebsiteIcon from '../common/icons/WebsiteIcon';
import YoutubeIcon from '../common/icons/YoutubeIcon';

export interface IProjectItem {
  id: string;
  title: string;
  coverImg: string;
  websiteUrl?: string;
  notionUrl: string;
  gitHubUrl: string;
  youtubeUrl?: string;
  techStack: Array<string>;
}

export default function ProjectItem({
  projectInfo,
}: {
  projectInfo: IProjectItem;
}) {
  return (
    <li className={style.projectItem}>
      <div className={style.imageFrame}>
        <img src={projectInfo.coverImg} alt={projectInfo.title} />
      </div>
      <div className={style.projectInfo}>
        <p className={style.projectTitle}>{projectInfo.title}</p>
        <ul className={style.projectDescList}>
          <li>
            <ul className={style.projectUrlList}>
              {projectInfo.websiteUrl && (
                <li>
                  <Link href={projectInfo.websiteUrl} target='_blank'>
                    <WebsiteIcon color='#027DC4' />
                  </Link>
                </li>
              )}
              <li>
                <Link href={`/projects/${projectInfo.notionUrl}`}>
                  <NotionIcon />
                </Link>
              </li>
              <li>
                <Link href={projectInfo.gitHubUrl} target='_blank'>
                  <GithubIcon color='#171515' />
                </Link>
              </li>
              {projectInfo.youtubeUrl && (
                <li>
                  <Link href={projectInfo.youtubeUrl} target='_blank'>
                    <YoutubeIcon color='#FF0000' />
                  </Link>
                </li>
              )}
            </ul>
          </li>
          <li>
            <span>Tech : {projectInfo.techStack.join(', ')}</span>
          </li>
        </ul>
      </div>
    </li>
  );
}
