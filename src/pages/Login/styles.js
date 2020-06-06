import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    height: '100vh',
    padding: '20px',
    fontFamily: theme.primaryFontFamily,
    color: theme.primaryTextColor,
    border: '1px solid red',
    '& *': {
      boxSizing: 'border-box',
    },
  },
  heading: {
    textAlign: 'center',
    margin: '0 0 20px 0',
    textTransform: 'uppercase',
    letterSpacing: theme.letterSpacingHeading,
    color: theme.primaryTextColor,
    fontFamily: theme.primaryFontFamily,
    fontSize: '2em',
    fontWeight: 'normal',
  },
  formContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '28px 38px',
    margin: '0 auto',
    width: '345px',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)',
    borderRadius: '12px',
    fontFamily: theme.secondaryFontFamily,
    '& $inputContainer:first-of-type': {
      marginBottom: '20px',
    },
  },
  inputContainer: {
    position: 'relative',
    '& svg': {
      position: 'absolute',
      bottom: '5px',
      left: '5px',
    },
  },
  input: {
    width: '100%',
    padding: '10px 0 10px 40px',
    fontSize: '.9em',
    letterSpacing: theme.letterSpacingText,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    outline: 'none',
    '&:focus': {
      borderColor: 'black',
    }
  },
  loginBtn: {
    display: 'block',
    margin: '30px auto 0 auto',
    fontWeight: 'bold',
    fontSize: '1em',
    fontFamily: theme.thirdFontFamily,
    letterSpacing: theme.letterSpacingText,
    textTransform: 'uppercase',
    color: 'white',
    border: `1px solid black`,
    backgroundColor: 'black',
    borderRadius: '22.5px',
    width: '100%',
    height: '45px',
    outline: 'none',
    cursor: 'pointer',
  },
}))

export default useStyles