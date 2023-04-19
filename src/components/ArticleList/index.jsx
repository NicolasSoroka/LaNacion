import { Article } from '..';
import styles from './ArticleList.module.scss'
import { useContext, useState } from "react";
import AppContext from "@/context/AppContext";

const ArticleList = () => {
  const { articles } = useContext(AppContext);

  const [showAll, setShowAll] = useState(false);
  const filteredArticles = articles?.filter(element => element.subtype === "7");
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
