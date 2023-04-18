import { useState, useEffect } from "react";

function useGetArticlesData() {
  const [filteredTags, setFilteredTags] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/getData");
      const data = await response.json();
      setArticles(data);

      const filteredTags = {};
      if (data) {
        for (const article of data.articles) {
          for (const tag of article.taxonomy.tags) {
            const tagSlug = tag.slug;
            if (tagSlug in filteredTags) {
              filteredTags[tagSlug].count++;
            } else {
              filteredTags[tagSlug] = {
                slug: tagSlug,
                text: tag.text,
                count: 1,
              };
            }
          }
        }
      }
      const numericIndexArray = Object.values(filteredTags).sort(
        (a, b) => b.count - a.count
      );
      setFilteredTags(numericIndexArray);
    }
    fetchData();
  }, []);

  return {filteredTags, articles};
}

export default useGetArticlesData;
