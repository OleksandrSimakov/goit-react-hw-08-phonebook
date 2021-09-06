import ContactListItemEl from '../ContactListItem/ContactListItem.styled'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const styles = {
  button: {
    fontSize: '12px',
  },
}

function ContactListItem({ name, number, onDelBtnClick }) {
  return (
    <ContactListItemEl>
      {name}: {number}
      {/* <button
        type="submit"
        name={name}
        onClick={onDelBtnClick}
        style={styles.button}
      >
        Удалить
      </button> */}
      <Button
        type="submit"
        name={name}
        onClick={onDelBtnClick}
        style={styles.button}
      >
        Удалить
      </Button>
    </ContactListItemEl>
  )
}

ContactListItem.propTypes = {
  onDelBtnClick: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
}

ContactListItem.defaultProps = {
  name: null,
  number: null,
  onDelBtnClick: () => null,
}

export default ContactListItem
