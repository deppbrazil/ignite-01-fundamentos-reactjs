import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

const imgAvatar =
  "https://github.com/deppbrazil.png"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={imgAvatar} />
          <div className={styles.authorInfo}>
            <strong>Mir</strong>
            <span>FrontEnd Engineer</span>
          </div>
        </div>

        <time title="27 de Julho de 2022" dateTime="2022-07-27 18:23:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto
          que fiz no NLW Return, evento da Rocketseat.
          O nome do projeto é DoctorCare 🚀</p>

          <p>👉{" "}<a href="#">jane.design/doctorcare</a></p>

          <p>
            <a href="#">#novoprojeto</a>{" "}
            <a href="#">#nlw</a>{" "}
            <a href="#">#rocketseat</a>{" "}
          </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}