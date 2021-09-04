import ContactAddFormEl from './ContactAddForm.styled'
import { useGetContactsQuery } from '../../redux/contacts/apiService'
import { useAddContactMutation } from '../../redux/contacts/apiService'
import { toast } from 'react-hot-toast'

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
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid gray',
    cursor: 'pointer',
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
          Name
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
          Number
          <input style={styles.input} type="tel" name="number" required></input>
        </label>
        <button type="submit" style={styles.button} disabled={isLoading}>
          Add Contact
        </button>
      </ContactAddFormEl>
    </>
  )
}
