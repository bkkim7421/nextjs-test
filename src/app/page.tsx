'use client';

import { useState } from 'react';
import styles from './styles.module.css'

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    /*<main>
      <span>
        The count is {count}!
      </span>
      <span>Hello World!</span>
      <br/>
      <button type="button"
        onClick={() => {
          setCount((prev) => ++prev);
        }}
        style={{
          border: 'none',
          padding: '8px 14px',
          borderRadius: '8px',
          backgroundColor: 'magenta',
          color: 'white',
          cursor: 'pointer',
        }}>
        click me!
      </button>
    </main>*/
    
    <body>
        <header>
            <h1>22기 WP 김병규에요</h1>
            <h2>웹플인데 웹프로그래밍을 잘 몰라여</h2>
            <h3 className={styles.textCancel}>사람이 정말 재미없어요</h3>
        </header>
        
        <main className={styles.container}>
          <div>
              <h2>좋아하는 것들이에여</h2>
              <ul>
                  <li>기타 치는거 좋아해요</li>
                  <li>노래 듣는것도 조아요</li>
                  <li>친구들이랑 잡담도 자주해요</li>
              </ul>
          </div>
          <div>
              <h2>제 삶의 패턴이에여</h2>
              <ol>
                  <li>아침에 일어나요</li>
                  <li>밥먹어요</li>
                  <li>수업들어요</li>
                  <li>밥먹어요</li>
                  <li>수업들어요</li>
                  <li>밥먹어요</li>
                  <li>멍때리면서 야자시간을 때워요</li>
                  <li>잠자요</li>
              </ol>
          </div>
          <div>
              <h2>개발도 잘하면서 교과성적도 높은게 꿈이에요</h2>
              <span className={styles.textCancel}>근데 공부는 안해요. 이미 망한 것 같아요.</span>
          </div>
          <div>
              <h2>친하게 지내요</h2>
              <p>그래주실거죠..?</p>
          </div>
          <input type="text" placeholder="이건 그냥 넣어봤어요"/>
        </main>

        <footer>
            <a className={styles.HL} href="https://www.instagram.com/_in_queue/" target="_blank">인스타에여</a>
            <span>(만든지 얼마 안됐어요)</span><br/>
        </footer>
    </body>
  )
}
