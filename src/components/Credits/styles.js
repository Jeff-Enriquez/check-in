import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  page: {
    // display: 'none',
    display: 'relative',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '900',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: theme.backgroundColor1,
    textAlign: 'center',
    '& button': {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '1.3em',
      textTransform: 'uppercase',
      letterSpacing: theme.letterSpacingText,
      cursor: 'pointer',
      color: '#707070',
    },
    '& button:hover': {
      color: '#780000',
    }
  },
  content: {
    width: 'fit-content',
    margin: '0 auto',
  },
  heading: {
    display: 'inline',
    fontFamily: theme.primaryFontFamily,
    letterSpacing: theme.letterSpacingText,
  },
  name: {
    display: 'inline-block',
    margin: '0',
    fontFamily: theme.primaryFontFamily,
    letterSpacing: theme.letterSpacingText,
  },
  display: {
    display: 'relative',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    marginTop: '20px',
    '& img': {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
  },
  textContainer: {
    display: 'inline',
    marginLeft: '20px',
    maxWidth: '500px',
    fontFamily: theme.secondaryFontFamily,
    '& p': {
      margin: '0',
      padding: '0',
    },
  },
  links: {
    marginTop: '10px',
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
  light: {
    fontWeight: '300',
  },
  headingContainer: {},
  '@media (max-width: 850px)':{
    profileContainer: {
      flexDirection: 'column',
      '& img': {
        marginBottom: '20px',
      }
    },
    headingContainer: {
      marginTop: '40px',
    },
    textContainer: {
      textAlign: 'center',
      maxWidth: '400px',
    },
    links: {
      position: 'absolute',
      bottom: '30px',
      left: '30px',
    },
    name: {
      display: 'block',
    },
  },
  '@media (max-width: 480px)': {
    heading: {
      fontSize: '1.4em',
    },
    name: {
      fontSize: '1.4em',
    },
  }
}))

export default useStyles