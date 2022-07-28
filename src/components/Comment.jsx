import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

const imgAvatar =
  "https://github.com/deppbrazil.png"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src={imgAvatar} hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mir Carvalho</strong>
              <time title="27 de Julho de 2022" dateTime="2022-07-27 18:23:00">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>
            Muito bom....
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}