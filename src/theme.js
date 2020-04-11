import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1968fc',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontSize: '4rem',
    h3: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1.8rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.2rem',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
        borderBottom: '1px solid #f4f4f4',
        color: '#1968fc',
      },
    },
    MuiButton: {
      contained: {
        boxShadow: '0 10px 40px 0 rgba(25,104,252,0.3)',
        borderRadius: '15px',
        padding: '15px 40px',
        textTransform: 'none',
        backgroundColor: '#fff',
        fontSize: '1rem',
      },
    },
  },
})

export default theme
