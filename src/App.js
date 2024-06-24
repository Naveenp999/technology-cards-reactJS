import './App.css'
import Banner from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => {
  const p = (
    <div className="container">
      <div className="sub-container">
        <h1 className="heading">Learn 4.0 Technologies</h1>
        <p className="description">
          Get trained by alumni of IITs and top companies, but it politely
          refused the offer as that would have meant reservation would make it
          succumb too like many other institutions.
        </p>
        <ul className="list-container">
          {cardsList.map(element => (
            <Banner key={element.id} data={element} />
          ))}
        </ul>
      </div>
    </div>
  )
  return p
}

export default App
