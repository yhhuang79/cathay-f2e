import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ListBlock = ({title, list}) =>
  <div style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
    <div style={{ textAlign: 'left', marginLeft: '1em' }}>
      <span style={{ color: 'MediumSeaGreen' }}>&#9613;</span>
      <span>{title}</span>
    </div>
    <div>
      <List>
        {
          list.map((order, i) => {
            console.log(order);
            const orderTitle = (order.status.code === 1 || order.status.code === 2) ?
              <div>
                <span style={{ color: 'rgb(60, 179, 113)', marginRight: '4em' }}>{order.status.type}</span>
                <span>預計出貨: {order.date}</span>
              </div> :
              <div><span>{order.status.type}</span></div>;
            const renderAvatar = (order.status.code === 1 || order.status.code === 2) ?
              <Avatar src={order.logo} /> :
              <Avatar style={{ opacity: '0.2' }} src={order.logo} />;

            return (
              <ListItem style={{ backgroundColor: '#FFFFFF', marginBottom: '2px' }} key={i} alignItems="flex-start">
                <ListItemAvatar>
                  {renderAvatar}
                </ListItemAvatar>
                <ListItemText
                  primary={orderTitle}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {order.name}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="arrow-forward">
                    <ArrowForwardIosIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>);
          })
        }
      </List>
    </div>
  </div>;

export default ListBlock;