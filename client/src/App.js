import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes from './route'
import Navbar from './components/Navbar'
import Navigation from './components/Navigation'
import {makeStyles} from '@material-ui/styles'
import {LinearProgress} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  displayPageWrapper: props => ({
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0px'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '240px',
    },
    paddingTop: '64px',
    [theme.breakpoints.down('md')] : {
      paddingTop: '56px'
    }
  }), 
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.light, 
      borderRadius: theme.shape.borderRadius 
    }
  }
}))

const App = props => {
  const classes = useStyles(props)

  const menu = routes.map((route, index) => {
    return (route.component) ? (
      <Route 
        key={`${index}-route`}
        exact={route.exact}
        path={route.path}
        render={props => <route.component {...props} />}
      /> 
    ) : null
  })

  return (
      <div className="App">
      <Navbar />
      <Navigation />
      <div className={classes.displayPageWrapper}>
        <Suspense fallback={<LinearProgress />}>
          <Router>
            <Switch>
              {menu}
              <Redirect from="/" to="/" />
            </Switch>
          </Router>
        </Suspense>
      </div>
    </div>    
  );
};

export default App;
