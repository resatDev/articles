import React from 'react';
import { useGetMediumArticles } from '../hooks';
import ArticleCard from './ArticleCard';

const Articles = () => {
  const articles = useGetMediumArticles();

  return (
    <div className="articles">
      {articles.map(article => {
        const { title, link, pubDate, thumbnail } = article;
        return (
          <ArticleCard
            title={title}
            link={link}
            pubDate={pubDate}
            thumbnail={thumbnail}
          />
        );
      })}
    </div>
  )
}

export default Articles;