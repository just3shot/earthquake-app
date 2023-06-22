import { Container, Box } from '@mui/material'
import React from 'react'
import CustomAppBar from '../../components/CustomAppBar';
import BottomNav from '../../components/BottomNav';

export default function visualSOS() {

    const [isWhite, setIsWhite] = React.useState(true);
    const flashingSpeed = 500;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsWhite((prevIsWhite) => !prevIsWhite);
        }, flashingSpeed)

        return () => {
            clearInterval(interval);
        }
    }, []);

    const backgroundColor = isWhite ? '#fff' : '#000';

    return (
        <Container sx={{
            display: 'flex',
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
        }}>
            <CustomAppBar headerName={"Visual SOS"} haveBackButton={true} />
            <BottomNav page='dashboard' />
        </Container>
    )
}
