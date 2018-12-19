import React from "react";
import logo from "../images/logo.png";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default () => (
  <div>
    <AppBar position="static" color="inherit" style={{ 
        height:'60px',
        borderBottom: '#f5f3f7 1px solid',
      }}>
      <Toolbar variant="dense">
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="Logo" height="50px" style={{ marginTop: '25px', }}/>
      </Toolbar>
    </AppBar>
    <div id="main">
      <div className="hero"
            style={{
              background: 'no-repeat url("https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80")',
              height: '600px',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom center',
              textAlign: 'center',
            }}
          >
          <h1
            style={{
              color: 'rgba(255,255,255, .95)',
              paddingTop: '160px',
              paddingBottom: '20px',
              width: '800px',
              margin: '0 auto',
            }}
          >Chinese tea surprises in your mailbox twice a month.</h1>
          <div
            style={{
              paddingTop:'20px',
              paddingBottom: '20px',
              width: '800px',
              margin: '0 auto',
              color: 'rgba(255,255,255, .95)',
            }}
          >$29 monthly with FREE shipping even to United State.</div>

          <TextField
            required
            color='secondary'
            label="Email"
            type='email'
            className='xx'
            variant="filled"
          />
          <Button variant="raised" color="secondary" className='xxx' style={{borderRadius: '25px',}}>
            Subscribe now
          </Button>
      </div>
      <div className="content"
          style={{
            margin: '0 auto',
            width: '900px',
            padding: '30px 0',
          }}
        >
          <article className="card"
            style={{
              boxShadow: 'rgba(25, 17, 34, 0.05) 0px 3px 10px',
              margin: '25px 0',
              padding: '20px',
              background: 'rgb(255, 255, 255)',
              borderRadius: '4px',
              transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
            }}
          >
            <h1>Hello world</h1>
            <div>
            recommend checking with your condo association to see if pets are allowed. Unfortunately, if they’re not allowed, then you can’t allow pets.

Pets Might Damage the Property 
Property damage from pets is possible, especially with dog breeds that tend to chew, especially if it’s a puppy. We surveyed our 40,000 landlords, and 64% of them stated a dog had damaged their property.
            </div>

          </article>
        </div>
    

    </div>
    <footer
      style={{backgroundColor:'rgba(255,255,255,0.975)', 
        height:'60px',
        borderTop: '#f5f3f7 1px solid',
      }}
    >
      <div 
        style={{
          margin: '0 auto',
          width: '900px',
          textAlign: 'center',
          padding: '10px 0',
          color: '#a1a1a1'
        }}
      >
        &copy;pandax
      </div>
    </footer>
  </div>)