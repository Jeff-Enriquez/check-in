import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
    padding: '20px',
  },
  modal: {
    display: 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '10',
    backgroundColor: 'white',
    textAlign: 'center',
    letterSpacing: theme.letterSpacingText,
    fontFamily: theme.secondaryFontFamily,
    fontSize: '1em',
    padding: '30px 40px',
    maxWidth: '80%',
    border: '1px solid gray',
    '& button': {
      display: 'block',
      margin: '0 auto',
      width: '100px',
      padding: '5px 0',
      boxSizing: 'border-box',
      textTransform: 'uppercase',
      borderRadius: '20px',
      border: '1px solid gray',
      cursor: 'pointer',
      outline: 'none',
    },
    '& button:first-of-type': {
      marginBottom: '10px',
      backgroundColor: '#c2f0ff',
      '&:hover': {
        backgroundColor: '#d9f6ff',
      },
    },
    '& button:last-of-type': {
      backgroundColor: '#f5f5f5',
      '&:hover': {
        backgroundColor: '#fafafa',
      }
    },
    '& p': {
      margin: '0 0 20px 0',
    },
    '& span': {
      fontWeight: 'bold',
      color: 'darkblue',
    }
  },
  display: {
    display: 'block',
  },
  pageTitle: {
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: theme.letterSpacingText,
    color: theme.primaryTextColor,
    fontFamily: theme.primaryFontFamily,
    fontSize: '2em',
    fontWeight: 'normal',
  },
  search: {
    boxSizing: 'border-box',
    marginBottom: '10px',
    width: '100%',
    height: '56px',
    padding: '15px',
    borderRadius: '24px',
    background: '#FFFFFF url(images/search.svg) no-repeat scroll 15px 15px',
    backgroundSize: '24px 24px',
    paddingLeft: '50px',
    fontFamily: theme.secondaryFontFamily,
    fontSize: '1.1em',
    outline: 'none',
  },
  container: {
    fontFamily: theme.secondaryFontFamily,
    maxWidth: '800px',
    margin: '50px auto 0 auto',
  },
  responsiveTable: {
    paddingInlineStart: '0',
    '& li': {
      borderRadius: '3px',
      padding: '25px 30px', 
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      '&:hover':{
        transform: 'scale(1.02)',
      },
    },
    '& li:first-of-type': {
      '&:hover': {
        transform: 'none',
      }
    },
    '& button': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90px',
      padding: '5px 0',
      display: 'inline-block',
      border: `1px solid #979797`,
      backgroundColor: 'white',
      borderRadius: '22.5px',
      outline: 'none',
      cursor: 'pointer',
      fontFamily: theme.thirdFontFamily,
      '&:hover': {
        backgroundColor: 'lightskyblue',
      },
    }
  },
  add: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '120px',
    margin: '0'
  },
  tableHeader: {
    backgroundColor: 'rgb(173, 216, 230)',
    fontSize: '1em',
    textTransform: 'uppercase',
  },
  tableRow: {
    fontSize: '.9em',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 5px rgba(173, 216, 230, 0.2), 0px 3px 14px rgba(173, 216, 230, 0.12), 0px 8px 10px rgba(173, 216, 230, 0.14)',
  },
  col1: {
    flexBasis: '5%',
  },
  col2: {
    flexBasis: '30%',
    margin: '0 8px',
  },
  col3: {
    flexBasis: '15%',
  },
  col4: {
    flexBasis: '15%',
    position: 'relative',
    width: '100px',
  },
  '@media (max-width: 700px)': {
    tableHeader: {
      fontSize: '.8em',
    },
    tableRow: {
      fontSize: '.6em',
    },
    responsiveTable: {
      '& button': {
        width: '72px', 
        fontSize: '1.15em',
      },
    },
    add: {
      width: '80px',
      transform: 'translate(-30%, -50%)',
    },
  },
}))

export default useStyles