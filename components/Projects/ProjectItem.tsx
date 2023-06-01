import { styled } from '@/stitches.config';
import Link from 'next/link';
import React from 'react';
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

const ProjectItemStyle = styled('li', {
  position: 'relative',
  width: '100%',
  '& .image-frame': {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '56%',
    borderRadius: '16px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    overflow: 'hidden',
    '& img': {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  '& .project-info': {
    padding: '12px 0 20px 0',
    '& .project-title': {
      fontWeight: 500,
    },
    '& .project-desc-list': {
      marginTop: '12px',
      '& .project-url-list': {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        '& li': {
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: '$solidwhite',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          '& a': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          },
        },
      },
      '& > li': {
        marginBottom: '12px',
        '& span': {
          fontSize: '0.9rem',
        },
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
  },
});

export default function ProjectItem({
  projectInfo,
}: {
  projectInfo: IProjectItem;
}) {
  return (
    <ProjectItemStyle>
      <div className='image-frame'>
        <img src={projectInfo.coverImg} alt={projectInfo.title} />
      </div>
      <div className='project-info'>
        <p className='project-title'>{projectInfo.title}</p>
        <ul className='project-desc-list'>
          <li>
            <ul className='project-url-list'>
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
    </ProjectItemStyle>
  );
}
