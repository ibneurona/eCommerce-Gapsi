import React from 'react';
import logoUrl from '../img/logo.png';
import {IconButton,Menu,MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  'Reiniciar'
];

const ITEM_HEIGHT = 48;


const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="row">
      <div className="col-12">  
        <header className="">
          <nav className="nav navbar-light bg-light justify-content-between">
              <a className="navbar-brand" href="/">
                <img src={logoUrl} width="150" height="60" alt={"Gapsi"}/>
              </a>

              <div className="d-flex align-items-center">
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon/>
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
              </div>
            </nav>
        </header>
      
      </div>
    </div>
  
  );

}

export default Navbar;