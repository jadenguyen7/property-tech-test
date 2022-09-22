import { FC } from 'react'
import property1 from '../../images/property1.jpeg'
import styles from './Card.module.css'

const properties = [
	{
		image: '../../images/property1.jpeg',
		address: '29, Blake Road, London, Greater London E27 6NP',
		bedrooms: '4 bedrooms',
		price: '£2,250,000',
		status: 'active',
	},
]

const Card: FC = () => {
	return (
		<>
			{properties.map((property) => {
				return (
					<div className={styles.card}>
						<img src={property1} alt="property" className={styles.image} />

						<div className={styles.container}>
							<p>{property.address}</p>
							<p>{property.bedrooms}</p>
							<p>{property.price}</p>
							<p>{property.status}</p>
						</div>
					</div>
				)
			})}
		</>
	)
}

export { Card }
