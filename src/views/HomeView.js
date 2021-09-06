import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
}

const HomeView = () => (
  <Container>
    <Row>
      <Col>
        <div style={styles.container}>
          <h1 style={styles.title}>Телефонная книга</h1>
        </div>
      </Col>
    </Row>
  </Container>
)

export default HomeView
