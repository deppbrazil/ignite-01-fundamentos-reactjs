import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// Styles
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/deppbrazil.png",
      name: "Mir Carvalho",
      role: "FrontEnd Engineer"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      },
    ],
    publishedAt: new Date("2022-07-27 19:59:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      },
    ],
    publishedAt: new Date("2022-07-26 12:00:00")
  },
]

export function App() {
  return (
    <div >
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
