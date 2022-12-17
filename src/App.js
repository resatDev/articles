import ArticleCard from "./ArticleCard";
import { useGetMediumArticles } from "./hooks";
import "./app.css";

const App = () => {
  const articles = useGetMediumArticles();

  console.log({articles});

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

export default App;
