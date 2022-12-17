import { useEffect, useState } from "react"

export const useGetMediumArticles = () => {
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rsat.memis')

        const data = await response.json();

        setArticles(data.items);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

  return articles;
};