import "./Category.css"

export function Category ({ img, title, description }) {

  return (
    <div className="category-item">
      <img src={img}></img>
      <h4>{title}</h4>
      <p>{description}</p>
      <a></a>
    </div>
  )
}