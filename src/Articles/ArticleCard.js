import React from 'react';

const ArticleCard = ({ title, link, pubDate, thumbnail}) => {
  const handleOpenArticle = () => {
    window.open(link, "_blank");
  };
  const publicationDate = pubDate?.split(' ')[0];
  return (
    <div onClick={handleOpenArticle} className="article">
      <div className='article-info'>
        <h3>{title}</h3>
        <p>{publicationDate}</p>
      </div>
    </div>
  );
};
export default ArticleCard;