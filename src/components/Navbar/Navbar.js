import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React from 'react'
import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color='inherit' >
                        <img src={logo} alt="E Bazar" height="25px" className={classes.image} />
                        E Bazar
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
