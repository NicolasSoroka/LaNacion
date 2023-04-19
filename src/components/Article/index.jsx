import styles from './Article.module.scss';
import Image from "next/image";

const Article = ({ article }) => {

  const date = new Date(article.display_date);
  const formatter = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  const formattedDate = formatter.format(date);

  const imageUrl = article.promo_items?.basic.url;

  return (
    <article className={styles.container}>
      <section className={styles.container__section}>
        <a href="" className={styles.container__section__image}>
            <Image src={imageUrl ? imageUrl : '/default.png'} alt="article image" width={300} height={200} blur blurDataURL='/lanaciondefault.png' />
        </a>
      </section>
      <div className={styles.container__description}>
        <h2 className={styles.container__description__title}><a href=""><b>{article.headlines.basic}</b> que tiene de escudo al Che Guevara y donde izan la bandera de Cuba</a></h2>
        <h4 className={styles.container__description__date}>{formattedDate}</h4>
      </div>
    </article>
  );
}

export default Article