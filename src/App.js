import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Barra from './views/pages/Graficos/Barra'
import Dona from './views/pages/Graficos/Dona'
import Dona2 from './views/pages/Graficos/Dona2'
import Circulo from './views/pages/Graficos/Circulo'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const Graficobarra = React.lazy(() => import('./views/pages/Graficos/Barra'))
const Graficocirculo = React.lazy(() => import('./views/pages/Graficos/Circulo'))
const Graficodona = React.lazy(() => import('./views/pages/Graficos/Dona'))
const Graficodona2 = React.lazy(() => import('./views/pages/Graficos/Dona2'))

const GraficosBarra = React.lazy(() => import('./views/pages/Graficos/Barra'))
const GraficosCirculo = React.lazy(() => import('./views/pages/Graficos/Circulo'))
const GraficosDona = React.lazy(() => import('./views/pages/Graficos/Dona'))
const GraficosDona2 = React.lazy(() => import('./views/pages/Graficos/Dona2'))


const TabsPillsExample = React.lazy(() => import('./Proyecto/TabsPillsExample'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense>
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />

          <Route exact path="/Graficobarra" name="Barra" element={<Barra />} />
          <Route exact path="/Graficocirculo" name="Circulo" element={<Circulo />} />
          <Route exact path="/Graficodona" name="Dona" element={<Dona />} />
          <Route exact path="/Graficodona2" name="Dona2" element={<Dona2 />} />
          
      
          <Route exact path="/tabspills" name="TabsPills" element={<TabsPillsExample />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
