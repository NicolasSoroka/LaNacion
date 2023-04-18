const { useState, useEffect } = require("react");

function useGetArticlesData() {
  const [articles, setArticles] = useState(null);
  const [filteredTags, setFilteredTags] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/getData");
        const data = await response.json();
        setArticles(data?.articles);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return {filteredTags, articles};
}

export default useGetArticlesData