import React from 'react';

const ArticleCard = ({ title, link, pubDate, thumbnail}) => {
  const handleOpenArticle = () => {
    window.open(link, "_blank");
  };
  const publicationDate = pubDate?.split(' ')[0];
  return (
    <div onClick={handleOpenArticle} className="article">
      <img style={{ width: 250, height: 250}} src={thumbnail} alt="article_image" />
      <div className='article-info'>
        <p>{publicationDate}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default ArticleCard;