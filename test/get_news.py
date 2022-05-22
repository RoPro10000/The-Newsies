import json
import requests
from newsapi import NewsApiClient

def get_news(keyword):
    apiKey = "f7e6231c657340c3af9882b415beed33"
    newsapi = NewsApiClient(apiKey)
    news = newsapi.get_everything(q=keyword, language='en', page_size=5)
    news_articles = news['articles']
    with open("./news.js", "w") as outfile:
        json.dump(news_articles, outfile, ensure_ascii=False)
    return "done"