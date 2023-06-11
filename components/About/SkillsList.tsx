import style from './SkillsList.module.scss';

export interface ISkill {
  _id: string;
  name: string;
  icon: string;
}

export default function SkillsList({
  title,
  skillsList,
}: {
  title: string;
  skillsList: Array<ISkill>;
}) {
  return (
    <div className={style.aboutSkillList}>
      <h4>{title}</h4>
      <ul className={style.aboutSkills}>
        {skillsList.map((skill) => (
          <li key={skill._id}>
            <img src={skill.icon} alt={skill.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
