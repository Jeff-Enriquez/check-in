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
    letterSpacing: '.2em',
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
  },
  inputHeading: {
    fontSize: '.8em',
    margin: '0 0 0 2px',
  },
  input: {
    width: '100%',
  },
  // inputContainer: {
  //   margin: '40px auto 0 auto',
  //   width: 'fit-content',
  //   '& input:first-child': {
  //     margin: '20px 0',
  //   },
  //   '& input': {
  //     boxSizing: 'border-box',
  //     display: 'block',
  //     width: '200px',
  //     padding: '5px',
  //   },
  // },
}))

export default useStyles