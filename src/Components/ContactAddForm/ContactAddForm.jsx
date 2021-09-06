import ContactAddFormEl from './ContactAddForm.styled'
import { useGetContactsQuery } from '../../redux/contacts/apiService'
import { useAddContactMutation } from '../../redux/contacts/apiService'
import { toast } from 'react-hot-toast'
import Button from 'react-bootstrap/Button'

const styles = {
  input: {
    display: 'block',
    marginBottom: '10px',
    marginTop: '5px',
  },
  label: {
    marginBottom: '10px',
  },
  button: {
    width: '100px',
    fontSize: '12px',
  },
}

export default function ContactAddForm() {
  const [addContact, { isLoading }] = useAddContactMutation()
  const { data } = useGetContactsQuery()

  const handleSubmit = (e) => {
    e.preventDefault()
    const contactsHaveDuplicate = data.find(
      (data) => data.name === e.target.elements.name.value,
    )

    if (contactsHaveDuplicate) {
      alert(`${e.target.elements.name.value} is already in contacts`)
      toast.error('Contact not added')
    } else {
      addContact({
        name: e.target.elements.name.value,
        number: e.target.elements.number.value,
      })
      toast.success('Contact added')
    }

    e.target.reset()
  }

  return (
    <>
      <ContactAddFormEl onSubmit={handleSubmit}>
        <label style={styles.label}>
          Имя контакта
          <input
            style={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label style={styles.label}>
          Номер телефона
          <input style={styles.input} type="tel" name="number" required></input>
        </label>
        <Button
          variant="secondary"
          type="submit"
          style={styles.button}
          disabled={isLoading}
        >
          Добавить
        </Button>
      </ContactAddFormEl>
    </>
  )
}

;<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
