import { FC, useEffect, useState } from 'react'
import { Listing } from '../../requests/listings.types'
import styles from './Card.module.css'

// GET /api/properties - return the full list of listings

// GET /api/properties/id - return specific listing matching id

// an array of the id's
// a function that passes in the id and updates the status property by making a post request

type PropertyProps = {
	id: number
	image: string
	address: string
	bedrooms: string
	price: string
	status: boolean
}

const Card: FC = () => {
	const [properties, setProperties] = useState([])
	const [status, setStatus] = useState(true)

	// const getListings = () => {
	// 	fetch('/listings')
	// 		.then((res) => {
	// 			return res.json()
	// 		})

	// 		.then((items) => setProperties(items))
	// }

	// const getListings = async () => {
	// 	const response = await fetch('/listings')
	// 	const data = await response.json()
	// 	setProperties(data)
	// 	setStatus(data.status)
	// }

	// const getListingStatus = async () => {
	// 	const response = await fetch('/listings')
	// 	const data: GetListingResponse = await response.json()
	// 	setStatus(data.status)
	// }

	const putStatus = async (id: number) => {
		const response = await fetch('/listings', {
			method: 'put',
			body: JSON.stringify({ id: id, status: !status }),
		})
		const data: Listing = await response.json()
		setStatus(data.status)
	}

	// to stop the infinitive loop
	useEffect(() => {
		const getListings = async () => {
			const response = await fetch('/listings')
			const data = await response.json()
			setProperties(data)
			setStatus(data.status)
		}
		getListings()
	}, [])

	return (
		<>
			{properties.map((property: PropertyProps, i) => {
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

								<input
									type="checkbox"
									id="status"
									checked={status}
									onChange={() => putStatus(property.id)}
								/>

								<p>{status ? 'Active' : 'Inactive'}</p>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export { Card }
