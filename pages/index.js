import React, { useState } from 'react'
import Head from 'next/head'
import names from '../data/japanese_names.json'

export default function Home() {

  const COOKIE_NAME = 'likedNames';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState([]);

  function randomIndex() {
    return Math.floor(Math.random() * names.length);
  }

  function setRandomIndex() {
    setCurrentIndex(Math.floor(Math.random() * names.length));
  }

  function pushLiked() {
    setLiked([...liked, names[currentIndex]]);
    bake_cookie();

    // console.log(read_cookie());

    setRandomIndex();
  }

  function bake_cookie() {
    document.cookie = COOKIE_NAME + '=' + JSON.stringify(liked);
  }

  function read_cookie() {
    var result = document.cookie.match(new RegExp(COOKIE_NAME + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
   }

  return (
    <div className="container">
      <Head>
        <title>My Baby Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {names[currentIndex]}
        </h1>

        <div className="buttons">
          <div className="dislikeBtn">
            <a href="#" onClick={() => setRandomIndex()}>&#10005;</a>
          </div>
          <div className="likeBtn">
            <a href="#" onClick={() => pushLiked()}>&#10084;</a>
          </div>
        </div>

        <p className="likedNames">
          {liked.join(', ')}
        </p>

      </main>

      <footer>
        <a
          href="https://www.linkedin.com/in/tiago-dakuzaku/"
          target="_blank"
        >
          Powered by @tdakuzaku
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .buttons div {
         float: left;
         margin: 0 10px;
         font-size: 2rem;
        }

        .likedNames {
          color: #CCC;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
