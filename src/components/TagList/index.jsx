import styles from './TagList.module.scss'
import { useContext } from 'react';
import AppContext from '@/context/AppContext';

const TagList = () => {
  // const { filteredTags } = useGetArticlesData();

  const { tags } = useContext(AppContext);
  const firstTenTags = tags?.slice(0, 10);

  return (
    <ul className={styles.container}>
      {firstTenTags?.map(tag => (
        <li key={tag.slug}>
          <a href={`/tema/${tag.slug}`}>{tag.text}</a>
        </li>
      ))}
    </ul>
  )
}

export default TagList