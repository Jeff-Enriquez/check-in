import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  nav: {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '100%',
    height: '100%',
    backgroundColor: theme.backgroundColor1,
    boxSizing: 'border-box',
    zIndex: '-1',
    opacity: '0',
    transition: 'opacity 0s',
    fontFamily: theme.primaryFontFamily,
    textTransform: 'uppercase',
    letterSpacing: '.2em', 
    '& $link:last-child': {
      marginBottom: '0'
    },
  },
  linkContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& $link:last-of-type': {
      margin: '0 auto',
    },
  },
  link: {
    display: 'block',
    width: 'fit-content',
    textDecoration: 'none',
    color: theme.primaryTextColor,
    fontSize: '2em',
    margin: '0 auto 80px auto',
  },
/********************** BURGER ICON **********************/
  burger: {
    position: 'absolute',
    top: '20px',
    right: '-10px',
    cursor: 'pointer',
    minWidth: '45px',
    height: '35px',
    zIndex: '500',
    marginRight: '30px',
    '& $burgerLine:nth-child(1)': {
      top: '0px',
    },
    '& $burgerLine:nth-child(2)': {
      top: '15px',
    },
    '& $burgerLine:nth-child(3)': {
      top: '30px',
    },
  },
  burgerLine: {
    position: 'absolute',
    width: '45px',
    height: '5px',
    background: 'black',
    transition: 'all .2s ease-in-out',
  },
  transformLine1: {
    transform: 'translateY(15px) rotate(135deg)',
  },
  transformLine3: {
    transform: 'translateY(-15px) rotate(-135deg)',
  },
  display: {
    opacity: '1',
    transition: 'opacity .5s',
    zIndex: '400',
  },
  fixed: {
    position: 'fixed',
  },
  signOut: {
    display: 'block',
    width: 'fit-content',
    margin: '70px auto 0 auto',
    color: 'gray',
    cursor: 'pointer',
    '&:hover':{
      color: 'darkred',
    },
  },
}))

export default useStyles
