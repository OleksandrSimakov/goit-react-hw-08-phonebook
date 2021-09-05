import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import AppBar from './Components/AppBar'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'
import { authOperations, authSelectors } from './redux/auth'
import { Spinner } from './Components/Spinner/Spinner'

const HomeView = lazy(() => import('./views/HomeView'))
const RegisterView = lazy(() => import('./views/RegisterView'))
const LoginView = lazy(() => import('./views/LoginView'))
const ContactsView = lazy(() => import('./views/ContactsView'))

export default function App() {
  const dispatch = useDispatch()
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent)
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  return isFetchingCurrentUser ? (
    <Spinner />
  ) : (
    <>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </>
  )
}
