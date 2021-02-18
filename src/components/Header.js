import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('working');
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                onClick={onClick}
                color="green" 
                text="Add"/>
        </header>
    )
}

Header.defaultProps = {
    title: 'River Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;