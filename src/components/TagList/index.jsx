import useGetArticlesData from '@/hooks/useGetArticlesData';
import styles from './TagList.module.scss'

const TagList = () => {
  const { filteredTags } = useGetArticlesData();
  const firstTenTags = filteredTags?.slice(0, 10);

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