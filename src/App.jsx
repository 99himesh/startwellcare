import { Route, Routes } from "react-router"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import OurTeamPages from "./pages/OurTeam"

function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="our-team" element={<OurTeamPages />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
