import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Work from './page/Work'
import Posts from './page/Posts'
import Post from './page/Post'
import Main from './layout/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Work />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
