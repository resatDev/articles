import React from 'react';

const ArticleCard = ({ title, link, pubDate, thumbnail}) => {
  const handleOpenArticle = () => {
    window.open(link, "_blank");
  };

  const publicationDate = pubDate?.split(' ')[0];

  console.log(pubDate);

  return (
    <div onClick={handleOpenArticle} className="article">
      <img style={{ width: 250, height: 250}} src={thumbnail} alt="article_image" />
      <h1>{title}</h1>
      <p>{publicationDate}</p>
    </div>
  );
};

export default ArticleCard;