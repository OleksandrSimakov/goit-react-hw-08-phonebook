import { useDispatch, useSelector } from 'react-redux'
import { authSelectors, authOperations } from '../../redux/auth'
import defaultAvatar from './default-avatar.png'
import Button from 'react-bootstrap/Button'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
}

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUsername)
  const avatar = defaultAvatar

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Вы вошли как {name}</span>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button> */}
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </div>
  )
}
