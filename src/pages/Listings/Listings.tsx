import { Card } from '../../components/Card/Card';
import styles from './Listings.module.css';

const Listings = () => {
	return (
		<>
			<h1 className={styles.title}>Listings</h1>
			<Card />
		</>
	);
};

export default Listings;
