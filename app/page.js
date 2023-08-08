'use client'
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
export default function Home() {
  const { getNews, newsData } = useAuth();
  const [data, setData] = useState([]);


  useEffect(() => {
    getNews();
    setData(newsData)

  }, [setData]);


  console.log(data)
  return (
    <main className="">
      <h1>homepage</h1>
      <div>
        {data.map((news) => {
          <div>
            <h2>{news.articles}</h2>
            <p>{news.articles.description}</p>
            <p>{news.article.link}</p>
          </div>
        })}
      </div>
    </main>
  )
}
