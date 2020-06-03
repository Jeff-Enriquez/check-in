import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  nav: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '0',
    right: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.backgroundColor1,
    boxSizing: 'border-box',
    zIndex: '400',
    opacity: '0',
    transition: 'opacity 0s',
    '& $link:last-child': {
      marginBottom: '0'
    },
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '.2em',
    color: theme.primaryTextColor,
    fontFamily: theme.primaryFontFamily,
    fontSize: '2em',
    marginBottom: '80px'
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
  },
}))

export default useStyles
