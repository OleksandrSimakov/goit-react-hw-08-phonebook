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

export default function RegisterView() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
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
    dispatch(authOperations.register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1>Регистрация нового пользователя</h1>

            {/* <form
              onSubmit={handleSubmit}
              style={styles.form}
              autoComplete="off"
            >
              <label style={styles.label}>
                Имя
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </label>

              <label style={styles.label}>
                Почта
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </label>

              <label style={styles.label}>
                Пароль
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </label>

              <Button type="submit">Зарегистрироваться</Button>
            </form> */}
            <Form
              onSubmit={handleSubmit}
              style={styles.form}
              autoComplete="off"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Имя контактка</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите имя контакта"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
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
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
