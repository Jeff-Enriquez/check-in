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
      width: '100px',
      padding: '5px 0',
      display: 'inline-block',
      border: `1px solid #979797`,
      backgroundColor: 'white',
      borderRadius: '22.5px',
      outline: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      letterSpacing: '.05em',
      '&:hover': {
        backgroundColor: 'lightskyblue',
        border: '1px solid lightskyblue',
      },
    }
  },
  tableHeader: {
    transform: 'scale(1.02)',
    backgroundColor: 'rgb(173, 216, 230)',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
  },
  tableRow: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 5px rgba(173, 216, 230, 0.2), 0px 3px 14px rgba(173, 216, 230, 0.12), 0px 8px 10px rgba(173, 216, 230, 0.14)',
  },
  col1: {
    flexBasis: '10%',
  },
  col2: {
    flexBasis: '40%',
  },
  col3: {
    position: 'relative',
    width: '100px',
    // flexBasis: '35%',
  },
}))

export default useStyles