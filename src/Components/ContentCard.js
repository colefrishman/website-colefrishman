import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        width: 300,
        borderRadius: 15,
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
    },
    media: {
        height: 140,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundColor: '#f5f5f5',
    },
    content: {
        backgroundColor: '#fff',
        padding: theme.spacing(2),
    },
    title: {
        color: '#2c3e50',
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    text: {
        color: '#34495e',
    },
    actions: {
        backgroundColor: '#f8f9fa',
        padding: theme.spacing(1, 2),
        '& a': {
            color: '#e74c3c',
            textDecoration: 'none',
            fontWeight: 'bold',
            '&:hover': {
                color: '#c0392b',
            },
        },
    },
}));

const ContentCard = (props) => {
    const classes = useStyles();
    const redir = (src) => { window.location = src };

    return(
        <Card className={classes.card}>
            <a href={props.src} style={{ textDecoration: "none" }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt={props.title}
                        image={props.image}
                        title={props.title}
                    />
                    <CardContent className={classes.content}>
                        <Typography variant="h5" className={classes.title}>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" className={classes.text}>
                            {props.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.actions} onClick={() => redir(props.src)}>
                    <a href={props.src}>{props.linktext}</a>
                </CardActions>
            </a>
        </Card>
    );
}

export default ContentCard;