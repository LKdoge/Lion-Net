import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';


function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  return Array.from(new Array(20)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function ZoosBlog() {
  const ref = React.useRef(null);
  const [messages] = React.useState(() => refreshMessages());

  return (
        <Box sx={{ width:'60%', float: 'right', height:'450px', overflow:'scroll' }} ref={ref}>
            <CssBaseline />
            <List>
                {messages.map(({ primary, secondary, person }, index) => (
                <ListItem button key={index + person}>
                    <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
                ))}
            </List>
        </Box>
  );
}

const messageExamples = [
  {
    primary: 'New animals this week?',
    secondary: "Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'No idea',
    secondary: "Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem",
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'New Stuff',
    secondary: "Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem Ipsum. Lorem Ipsum is Lorem",
    person: '/static/images/avatar/2.jpg',
  },
];