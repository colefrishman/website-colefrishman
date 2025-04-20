import { makeStyles } from '@material-ui/core/styles';

export const useTropicalStyles = makeStyles((theme) => ({
    root: {
        margin: '5% 10%',
        padding: '2%',
        background: 'linear-gradient(135deg, #4fd1c5 0%, #38b2ac 100%)',
        borderRadius: 20,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
    title: {
        color: '#2d3748',
        fontWeight: 'bold',
        marginBottom: theme.spacing(4),
        textShadow: '2px 2px 4px rgba(255,255,255,0.5)',
        textAlign: 'center',
    },
    sectionTitle: {
        color: '#2d3748',
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
    },
    section: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(3),
        backgroundColor: 'rgba(247, 250, 252, 0.9)',
        borderRadius: 15,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    divider: {
        height: 2,
        backgroundColor: '#ed8936',
        margin: theme.spacing(2, 0),
    },
    imageContainer: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 10,
        '&:hover img': {
            transform: 'scale(1.05)',
        },
    },
    image: {
        width: '100%',
        height: 'auto',
        transition: 'transform 0.3s ease-in-out',
    },
    imageGrid: {
        marginTop: theme.spacing(4),
    },
    imageItem: {
        padding: theme.spacing(2),
    },
    toolCard: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f7fafc',
        borderRadius: 15,
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
    },
    toolImage: {
        height: 200,
        objectFit: 'cover',
    },
    toolContent: {
        padding: theme.spacing(2),
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    toolTitle: {
        color: '#2d3748',
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    toolText: {
        color: '#4a5568',
        marginBottom: theme.spacing(2),
        flexGrow: 1,
    },
    toolLink: {
        color: '#ed8936',
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
            color: '#dd6b20',
            textDecoration: 'underline',
        },
    },
    exploreSection: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(6),
        backgroundColor: 'rgba(247, 250, 252, 0.9)',
        borderRadius: 15,
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
    exploreTitle: {
        color: '#2d3748',
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        fontSize: '2.5rem',
    },
    exploreSubtitle: {
        color: '#4a5568',
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        fontSize: '1.2rem',
    },
    exploreCard: {
        padding: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: '#f7fafc',
        borderRadius: 10,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            backgroundColor: '#e6fffa',
        },
    },
    button: {
        backgroundColor: '#ed8936',
        color: 'white',
        fontWeight: 'bold',
        padding: theme.spacing(2, 4),
        '&:hover': {
            backgroundColor: '#dd6b20',
        },
    },
    subtitle: {
        color: '#4a5568',
        marginBottom: theme.spacing(4),
        textAlign: 'center',
    },
})); 