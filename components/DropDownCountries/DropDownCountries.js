import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import ReactCountryFlag from 'react-country-flag'

// Redux
import { connect } from 'react-redux'
import { setCountry } from '../../redux/actions/configActions'

const useStyles = makeStyles(theme => ({
  icon: {
    minWidth: 25,
  },
  action: {
    margin: theme.spacing(0, 1),
  },
}))

const DropDownCountries = ({ config, setCountry, display }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelectCountry = country => {
    setCountry(country)
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        aria-controls="country-selector"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
        className={classes.action}
      >
        <ReactCountryFlag
          countryCode={config.country.short}
          className={classes.site}
        />
        {config.country[display]} <ArrowDropDownIcon />
      </Button>
      <Menu
        id="country-selector"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {process.env.countries.map(country => (
          <MenuItem
            key={country.short}
            onClick={() => handleSelectCountry(country)}
          >
            <ListItemIcon className={classes.icon}>
              <ReactCountryFlag countryCode={country.short} />{' '}
            </ListItemIcon>
            <ListItemText primary={country.name} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

const mapStateToProps = ({ config }) => ({
  config,
})

const mapDispatchToProps = {
  setCountry,
}
export default connect(mapStateToProps, mapDispatchToProps)(DropDownCountries)
