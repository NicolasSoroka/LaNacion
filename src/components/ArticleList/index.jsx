import useGetArticlesData from "@/hooks/useGetArticlesData";
import { Article } from '..';
import styles from './ArticleList.module.scss'
import { useState } from "react";

const ArticleList = () => {
  const { articles } = useGetArticlesData();
  const filteredArticles = articles?.filter(element => element.subtype === "7");
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? filteredArticles : filteredArticles?.slice(0, 8);

  return (
    <>
      <section className={styles.container}>
        {visibleData && visibleData.map(element => (
          <Article article={element} key={element._id} />
        )
        )}

      </section>
      {!showAll && (
        <button className={styles.button} onClick={() => setShowAll(true)}>Más notas de acumulado grilla</button>
      )}
    </>
  )
}

export default ArticleList
