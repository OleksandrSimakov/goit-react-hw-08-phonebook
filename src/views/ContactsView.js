import ContactAddForm from '../Components/ContactAddForm/ContactAddForm'
import ContactList from '../Components/ContactList/ContactList'
import Filter from '../Components/Filter/Filter'
import { useSelector } from 'react-redux'
import { useGetContactsQuery } from '../redux/contacts/apiService'
import { Spinner } from '../Components/Spinner/Spinner'
import { Toaster } from 'react-hot-toast'
import { filterSelector } from '../redux/contacts/contacts-selectors'
import { Container, Row, Col } from 'react-bootstrap'

export default function ContactsView() {
  const { data, isFetching } = useGetContactsQuery()

  const filter = useSelector(filterSelector)

  return (
    <Container>
      <Row>
        <Col>
          <h2>Добавление контакта</h2>

          <ContactAddForm />

          <h2>Список контактов</h2>

          <Filter />

          {isFetching && <Spinner />}

          {data && (
            <ContactList
              contacts={data.filter((contact) =>
                contact.name.toLowerCase().includes(filter),
              )}
            ></ContactList>
          )}

          <Toaster />
        </Col>
      </Row>
    </Container>
  )
}
