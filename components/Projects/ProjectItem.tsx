import style from './ProjectItem.module.scss';
import GithubIcon from '../common/icons/GithubIcon';
import NotionIcon from '../common/icons/NotionIcon';
import WebsiteIcon from '../common/icons/WebsiteIcon';
import YoutubeIcon from '../common/icons/YoutubeIcon';
import IconLink from '../common/IconLink';

export interface IProjectItem {
  _id: string;
  title: string;
  coverImg: string;
  websiteUrl?: string;
  notionUrl: string;
  gitHubUrl: string;
  youtubeUrl?: string;
  techStack: Array<string>;
  started_date: string;
  done_date?: string;
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
                  <IconLink
                    href={projectInfo.websiteUrl}
                    icon={<WebsiteIcon color='#027DC4' />}
                  />
                </li>
              )}
              <li>
                <IconLink
                  href={`${projectInfo.notionUrl}`}
                  icon={<NotionIcon />}
                />
              </li>
              <li>
                <IconLink
                  href={projectInfo.gitHubUrl}
                  icon={<GithubIcon color='#171515' />}
                />
              </li>
              {projectInfo.youtubeUrl && (
                <li>
                  <IconLink
                    href={projectInfo.youtubeUrl}
                    icon={<YoutubeIcon color='#FF0000' />}
                  />
                </li>
              )}
            </ul>
          </li>
          <li>
            <span>기술 스택 : {projectInfo.techStack.join(', ')}</span>
          </li>
        </ul>
      </div>
    </li>
  );
}
