import { Post } from "./Post";
import { Header } from "./components/Header"

export function App() {
  return (
    <>
      <Header />
      <Post
        title="Post 1"
        author="Mir"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium nostrum obcaecati culpa beatae ratione, debitis rerum
        maxime voluptatibus deserunt atque, dolorum voluptatem eaque fugit 
        assumenda ab illo perferendis recusandae ducimus?"
      />

    <Post
        title="Post 2"
        author="Pedro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium nostrum obcaecati culpa beatae ratione, debitis rerum
        maxime voluptatibus deserunt atque, dolorum voluptatem eaque fugit 
        assumenda ab illo perferendis recusandae ducimus?"
      />

    <Post
        title="Post 3"
        author="Gabi"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium nostrum obcaecati culpa beatae ratione, debitis rerum
        maxime voluptatibus deserunt atque, dolorum voluptatem eaque fugit 
        assumenda ab illo perferendis recusandae ducimus?"
      />
    </>
  )
}
