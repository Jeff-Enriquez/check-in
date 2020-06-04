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
    maxWidth: '485px',
    margin: '50px auto 0 auto',
  },   
}))

export default useStyles