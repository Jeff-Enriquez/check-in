import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
    padding: '20px',
  },
  pageTitle: {
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: theme.letterSpacingHeading,
    color: theme.primaryTextColor,
    fontFamily: theme.primaryFontFamily,
    fontSize: '2em',
    fontWeight: 'normal',
  },
  container: {
    fontFamily: theme.secondaryFontFamily,
    maxWidth: '485px',
    margin: '50px auto 0 auto',
  },
  titleContainer: {
    margin: '0 auto',
    width: 'fit-content',
    textAlign: 'center',
  },
  title: {
    margin: '0',
    color: '#801700',
    fontWeight: '700',
    fontSize: '1.8em',
    textDecoration: 'underline',
  },
  titleInfo: {
    margin: '5px 0',
    fontSize: '1.2em',
    marginLeft: '10px',
  },
  heading: {
    display: 'inline-block',
    fontSize: '1.5em',
    fontWeight: '600',
    margin: '40px 0 0 0',
  },
  info: {
    display: 'inline',
    fontSize: '1.1em',
    lineHeight: '1.5em',
    marginLeft: '10px',
  },
  imgContainer: {
    width: '75%',
    margin: '20px auto 0 auto',
  },
  img: {
    width: '100%',
  },
  textAreaContainer: {
    width: '75%',
    height: 'fit-content',
    margin: '20px auto 0 auto',
    textAlign: 'center',
  },
  textArea: {
    boxSizing: 'border-box',
    width: '100%',
    height: '200px',
    resize: 'none',
    padding: '4px',
    fontSize: '.8em',
    border: 'none',
    boxShadow: '0px 0px 0px 2px rgb(167, 230, 250)',
    outline: 'none',
    '&:focus': {
      boxShadow: '0px 0px 2px 2px rgb(4, 155, 204)',
    },
  },
  footer: {
    fontSize: '.8em',
    color: 'gray',
    margin: '0',
  },
  button: {
    display: 'block',
    margin: '18px auto 0 auto',
    fontSize: '1.1em',
    fontWeight: '600',
    padding: '6px 24px',
    fontFamily: theme.thirdFontFamily,
    boxShadow: 'inset 0px 1px 0px 0px #97c4fe',
    background: 'linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%)',
    backgroundColor: '#3d94f6',
    borderRadius: '6px',
    border: '1px solid #3337fed',
    cursor: 'pointer',
    color: '#FFFFFF',
    textShadow: '0px 1px 0px #1570cd',
    outline: 'none',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    '&:active': {
      background: 'linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%)',
      backgroundColor: '#1e62d0',
      position: 'relative',
      top: '1px',
    },
  },      
}))

export default useStyles