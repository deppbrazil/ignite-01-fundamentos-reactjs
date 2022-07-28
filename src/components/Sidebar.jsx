import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css"

const imgCover =
  "https://images.unsplash.com/photo-1658250709337-46fb7cc5e74a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";

const imgAvatar =
  "https://github.com/deppbrazil.png"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={imgCover} />

      <div className={styles.profile}>
        <Avatar src={imgAvatar} />
        <strong>Mir</strong>
        <span>FrontEnd Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}