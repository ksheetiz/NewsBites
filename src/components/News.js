import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Express Web Desk",
            "title": "Russia-Ukraine War Live Updates: Kremlin shift focus away from Kyiv, says main goal is Donbass - The Indian Express",
            "description": "Russia Ukraine War News Today, World War 3 News Updates",
            "url": "https://indianexpress.com/article/world/russia-ukraine-war-live-updates-putin-nato-zelenskyy-biden-lviv-mariupol-kyiv-7833671/",
            "urlToImage": "https://images.indianexpress.com/2022/03/ukraine-destruction.jpg",
            "publishedAt": "2022-03-26T02:13:24Z",
            "content": "Ukrainian citizens learned to make Molotov cocktails from government public service announcements, then they recorded themselves setting Russian armoured vehicles on fire. Ukraine’s soldiers waited i… [+1048 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Drinking habits that can speed up weight loss process - Times of India",
            "description": "Weight loss involves a holistic approach instead of a single target strategy. In order to remove the extra weight you need to focus on weight management first and then you should check your mental preparedness for the same. One should understand the factors b…",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/drinking-habits-that-can-speed-up-weight-loss-process/photostory/90444243.cms",
            "urlToImage": "https://static.toiimg.com/photo/90444456.cms",
            "publishedAt": "2022-03-26T01:30:00Z",
            "content": "Having less water not only hinders weight management, it also disturbs the overall ambience of the body. Ideally an adult should drink 2-4 litres of water per day. Drinking sufficient water helps bur… [+555 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Garena Free Fire MAX Redeem Codes for March 26: Check steps here to grab freebies now - HT Tech",
            "description": "Garena Free Fire MAX redeem codes for March 26, 2022: Players of Garena Free Fire MAX can redeem the codes released today to claim freebies now. Check the codes and steps here.",
            "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-max-redeem-codes-for-march-26-check-steps-here-to-grab-freebies-now-71648256944362.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/03/26/1600x900/Capture_1648256998337_1648257043717.PNG",
            "publishedAt": "2022-03-26T01:16:20Z",
            "content": "Garena Free Fire MAX redeem codes for March 26, 2022: What excites you more- playing your favorite game or getting free rewards? What if we tell you that you can get both. Garena Free Fire MAX player… [+1728 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Abhimanyu Mathur",
            "title": "The Kashmir Files: How media, word of mouth scripted an unlikely success story - Hindustan Times",
            "description": "Made on a budget of just ₹15 crore, The Kashmir Files has raked in over ₹200 crore at the box office, and that too, without any big stars. We decode the success of this unusual film. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/the-kashmir-files-box-office-success-decoded-how-news-social-media-word-of-mouth-scripted-an-unlikely-success-story-101648227536467.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/03/25/1600x900/TFK_1648227795249_1648227814422.jpeg",
            "publishedAt": "2022-03-26T01:01:10Z",
            "content": "When The Kashmir Files made 3.5 crore at the box office on March 11, its opening day , nobody was too surprised. The film had no big stars. The previous film by its director Vivek Agnihotri had done … [+5190 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Shubhajit Roy",
            "title": "Beijing wanted Wang to call on PM Modi, Delhi said polite no - The Indian Express",
            "description": "The Indian side was said to have conveyed to the Chinese that the Prime Minister was busy Friday since he had to attend the swearing-in ceremony of the UP Chief Minister in Lucknow.",
            "url": "https://indianexpress.com/article/india/beijing-wanted-wang-to-call-on-pm-delhi-said-polite-no-7836753/",
            "urlToImage": "https://images.indianexpress.com/2022/03/Jaishankar-4-1.jpg",
            "publishedAt": "2022-03-26T00:55:18Z",
            "content": "The Indian side was said to have conveyed to the Chinese that the Prime Minister was busy Friday since he had to attend the swearing-in ceremony of the UP Chief Minister in Lucknow.\r\nWang, who came o… [+554 chars]"
        }
    ]

    constructor(){
        super();
        console.log("This is contructor of News.js");
        this.state={
            articles : this.articles,
            loading : false
        }
    }

  render() {
    return (
      <div className="container my-3">
        <h2>NewHunt - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="Russia-Ukraine War Live Updates: Kremlin shift focus away from Kyiv, says main goal is Donbass - The Indian Express"
              description="Russia Ukraine War News Today, World War 3 News Updates"
              imageUrl="https://images.indianexpress.com/2022/03/ukraine-destruction.jpg"
              newsUrl = "/"
            />
          </div>
          <div className="col-md-4">
          <NewsItem
              title="Drinking habits that can speed up weight loss process - Times of India"
              description="Weight loss involves a holistic approach instead of a single target strategy. In order to remove the extra weight you need to focus on weight management first and then you should check your mental preparedness for the same. One should understand the factors b…s"
              imageUrl="https://static.toiimg.com/photo/90444456.cms"
              newsUrl = "/"
            />
          </div>
          <div className="col-md-4">
          <NewsItem
              title="Garena Free Fire MAX Redeem Codes for March 26: Check steps here to grab freebies now - HT Tech"
              description="Garena Free Fire MAX redeem codes for March 26, 2022: Players of Garena Free Fire MAX can redeem the codes released today to claim freebies now. Check the codes and steps here."
              imageUrl="https://images.hindustantimes.com/tech/img/2022/03/26/1600x900/Capture_1648256998337_1648257043717.PNG"
              newsUrl = "/"
            />
          </div>
        </div>
      </div>
    );
  }
}
