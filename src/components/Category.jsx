import "./Category.css"

export default function Category ({ img, title, description }) {

  return (
    <div className="category-item">
      <img src={img}></img>
      <div>
      <h6>{title}</h6>
      <p>{description}</p>
      <a className="category-link">Learn More →</a>
      </div>
    </div>
  )
}