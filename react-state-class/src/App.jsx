import Counter from './Counter';
import LikeButton from './LikeButton';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>States in react</p>
      <LikeButton/>
    </>
  )
}

export default App
