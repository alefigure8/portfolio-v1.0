import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Work from './page/Work'
import Posts from './page/Posts'
import Post from './page/Post'
import Main from './layout/Main'
import ProjectProvider from './content/ProjectProvider'
import NotFound from './page/NotFound'

function App() {
  return (
    <BrowserRouter>
      <ProjectProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="works" element={<Work />} />
            <Route path="posts" element={<Posts />} />
            <Route path="post/:id" element={<Post />} />
          </Route>
        </Routes>
      </ProjectProvider>
    </BrowserRouter>
  )
}

export default App
