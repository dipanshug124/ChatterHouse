import styles from './Home.module.css'
import {Link, useHistory} from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight:'bold',
        textDecoration: 'none',
        marginLeft: '10px'
    }

    const history = useHistory()

    function startRegister() {
        history.push('/register')
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Chatterhouse!" icon="logo">
                <p className={styles.text}>
                    We’re working hard to get Codershouse ready for everyone! Whie we wrap up the finishing vouches. We’re adding people gradually to make sure nothing breaks;
                </p>
                <div>
                    <Button onClick={startRegister} text="Get your username"/>
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite text?</span>
                    <Link style ={signInLinkStyle}to="/login">Sign in</Link>
                </div>
            </Card>
        </div>

    )
}

export default Home
