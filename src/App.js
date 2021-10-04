import logo from './logo.svg'
import './App.css'
import {
  Button,
  ButtonGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  DeleteButton,
  IconButton,
} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
// import IconButton from '@material-ui/icons/IconButton'
// import DeleteButton from '@material-ui/icons/DeleteButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#000, #fff)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
  },
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 30,
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
})

function StyledButton() {
  const classes = useStyles()
  return <Button className={classes.root}>Styled Button</Button>
}

function CheckboxComponent() {
  const [checked, setChecked] = useState(false)

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(event) => setChecked(event.target.checked)}
        />
      }
      label='I agree'
    />
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='ls'>
        <div className='App'>
          <header className='App-header'>
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>Siemka</Typography>
                <Button>Log in</Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2'>Welcome to MUI</Typography>
            <Typography variant='subtitle1' component='div'>
              I am meeting Material UI
            </Typography>
            <StyledButton />
            <Grid container spacing='4' justify='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{ width: '100%', height: 50 }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ width: '100%', height: 50 }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ width: '100%', height: 50 }} />
              </Grid>
            </Grid>
            <TextField
              variant='filled'
              color='secondary'
              type='email'
              label='email'
              placeholder='test@test.com'
            />
            <CheckboxComponent />
            <ButtonGroup variant='contained' color='primary' size='large'>
              <Button startIcon={<SaveIcon />} href='#'>
                Save
              </Button>
              <Button startIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>
            <img src={logo} className='App-logo' alt='logo' />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  )
}
