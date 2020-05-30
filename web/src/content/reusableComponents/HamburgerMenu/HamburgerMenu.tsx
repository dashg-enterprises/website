import * as React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem, MenuProps } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

interface IHamburgerMenu {
    menuItems?: IMenuItem[];
    menuId?: string;
}

interface IMenuItem {
    text: string;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const useStyles = makeStyles((theme) => ({
    menuButton: {
        width: '40px',
    },
    menuIcon: {
        color: 'white',
        fontSize: '40px',
    }
}))

const StyledMenu = withStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.primary.main,
    },
  }))((props: MenuProps) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ));

const StyledMenuItem = withStyles((theme) => ({
    root: {
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
  }))(MenuItem);

const HamburgerMenu = (props: IHamburgerMenu) => {

    const { menuItems, menuId } = props;

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return menuItems.length ? (
        <div id={menuId}>
            <Button
                className={classes.menuButton}
                onClick={handleClick}
            >
                {Boolean(anchorEl) ? <MenuOpenIcon className={classes.menuIcon}/> : <MenuIcon className={classes.menuIcon}/>}
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {menuItems.map((menuItem, index) => 
                    <StyledMenuItem onClick={menuItem.onClick} key={index}>
                       {menuItem.text}
                    </StyledMenuItem>
                )}
            </StyledMenu>
        </div>
    ) : null
}

export default HamburgerMenu