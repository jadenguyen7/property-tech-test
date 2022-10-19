import { FC, useEffect, useState } from 'react'
import styles from './Card.module.css'

// GET /api/properties - return the full list of listings
// POST /api/properties - create a new listing

// GET /api/properties/id - return specific listing matching id
// DELETE //api/properties/id - delete the licthing matching the id

const Card: FC = () => {
	const [properties, setProperties] = useState({
		items: [
			{
				image: '',
				address: '',
				bedrooms: '',
				price: '',
				status: '',
			},
		],
	})

	const getListings = () => {
		fetch('/listings')
			.then((res) => {
				return res.json()
			})

			.then((items) => setProperties({ items }))
	}

	// to stop the infinitive loop
	useEffect(() => {
		getListings()
	}, [])

	return (
		<>
			{properties.items.map((property, i) => {
				return (
					<div className={styles.cardContainer} key={i}>
						<div className={styles.card}>
							<img
								src={property.image}
								alt="property"
								className={styles.image}
							/>
							<div className={styles.container}>
								<h3>Property {i + 1}</h3>
								<h3>{property.address}</h3>
								<p>{property.bedrooms}</p>
								<p>{property.price}</p>
								<p>{property.status}</p>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export { Card }
