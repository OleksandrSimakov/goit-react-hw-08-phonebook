import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../redux/auth'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col, Form } from 'react-bootstrap'

const styles = {
  form: {
    width: 320,
  },
  // label: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   marginBottom: 15,
  // },
}

export default function LoginView() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperations.logIn({ email, password }))
    setEmail('')
    setPassword('')
  }

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1>Вход в аккаунт</h1>

            <Form
              onSubmit={handleSubmit}
              style={styles.form}
              autoComplete="off"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Почта</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Введите email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Введите пароль"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Войти
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
