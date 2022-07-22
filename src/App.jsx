import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Works from './page/Works'
import Work from './page/Work'
import Posts from './page/Posts'
import Post from './page/Post'
import Main from './layout/Main'
import ProjectProvider from './content/ProjectProvider'
import ModeProvider from './content/ModeProvider'
import NotFound from './page/NotFound'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <ModeProvider>
        <ProjectProvider>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="*" element={<NotFound />} />
              <Route index element={<Home />} />
              <Route path="works" element={<Works />} />
              <Route path="work/:id" element={<Work />} />
              <Route path="posts" element={<Posts />} />
              <Route path="post/:id" element={<Post />} />
            </Route>
          </Routes>
        </ProjectProvider>
      </ModeProvider>
    </BrowserRouter>
  )
}

export default App
