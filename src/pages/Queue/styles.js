import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  page: {
    padding: '20px',
  },
  pageTitle: {
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '.2em',
    color: theme.primaryTextColor,
    fontFamily: theme.primaryFontFamily,
    fontSize: '2em',
    fontWeight: 'normal',
  },
  container: {
    fontFamily: 'lato, sans-serif',
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
      letterSpacing: '.05em',
      '&:hover': {
        backgroundColor: 'lightskyblue',
      },
    }
  },
  remove: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '120px',
    margin: '0'
  },
  tableHeader: {
    backgroundColor: 'rgb(173, 216, 230)',
    fontSize: '1em',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
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
  }
}))

export default useStyles