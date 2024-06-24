import './index.css'

const Banner = props => {
  const {data} = props
  const p = (
    <li className={`${data.className} box`}>
      <div>
        <h1 className="sub-heading">{data.title}</h1>
        <p className="sub-description">{data.description}</p>
        <div className="image-container">
          <img src={data.imgUrl} className="image" alt={data.title} />
        </div>
      </div>
    </li>
  )
  return p
}
export default Banner
