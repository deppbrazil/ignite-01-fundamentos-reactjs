export function Post(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span>Escrito por: {props.author}</span>
    </>
  )
}