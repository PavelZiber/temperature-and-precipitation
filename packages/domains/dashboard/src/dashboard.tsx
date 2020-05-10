import Head from 'next/head'
import React from 'react'
import { withRouter } from 'next/router'

const Page = () => (
  <div>
    <Head>
      <title>Hello NextJs</title>
    </Head>
    <main>
      <h1 className='title'>
        Welcome to <a href='https://nextjs.org'>Next.js! Test hehe</a>
      </h1>

      <p className='description'>
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className='grid'>
        <a href='https://nextjs.org/docs' className='card'>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href='https://nextjs.org/learn' className='card'>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href='https://github.com/zeit/next.js/tree/master/examples' className='card'>
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
      </div>
    </main>

    <footer>
      <a
        href='https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by <img src='/zeit.svg' alt='ZEIT Logo' />
      </a>
    </footer>
  </div>
)

export const Dashboard = withRouter(Page)
