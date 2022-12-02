import { FC, useEffect, useState } from 'react';
import { Listing } from '../../requests/listings.types';
import styles from './Card.module.css';
import { getAllListings, putListing } from '../../requests/listings';
import Listings from '../../pages/Listings/Listings';

// GET /api/properties - return the full list of listings

// GET /api/properties/id - return specific listing matching id

// an array of the id's
// a function that passes in the id and updates the status property by making a post request

type PropertyProps = {
	id: number;
	image: string;
	address: string;
	bedrooms: string;
	price: string;
	status: boolean;
};

const Card: FC = () => {
	const [properties, setProperties] = useState<Listing[]>([]);

	const handleStatusUpdate = async (listing: Listing) => {
		if (!listing.id || listing === null) {
			return;
		}
		console.log('STATUS BEFORE', listing.status);

		const data = await putListing({
			id: listing.id,
			image: listing.image,
			address: listing.address,
			bedrooms: listing.bedrooms,
			price: listing.price,
			status: !listing.status,
		});

		const newProperties = properties.map((property) => {
			if (property.id !== data.id) {
				return property;
			} else {
				return data;
			}
		});

		setProperties(newProperties);
	};

	// to stop the infinitive loop
	useEffect(() => {
		const getListings = async () => {
			const response = await fetch('/listings');
			const data = await response.json();

			setProperties(data);

			// try {
			// 	const response = await getAllListings()
			// 	const data = await response.json()

			// 	setProperties(data)
			// 	setStatus(data.status)
			// } catch (error) {
			// 	if (error) {
			// 		return 'There was an error getting listings' + error
			// 	}
			// }
		};
		getListings();
	}, []);

	// console.log('PROPERTIES', properties);

	return (
		<>
			{properties.map((property: PropertyProps, i) => {
				return (
					<div className={styles.cardContainer} key={i}>
						<div
							data-testid={`card-${i}`}
							className={`${styles.card} ${
								!property.status ? styles.expiredStyle : ''
							}`}
						>
							<img
								src={property.image}
								alt="property"
								aria-label={`property-${i}`}
								className={styles.image}
							/>
							<div className={styles.container}>
								<h3>Property {i + 1}</h3>
								<h4>{property.address}</h4>
								<p data-testid={`bedrooms-for-property-${i}`}>
									{property.bedrooms}
								</p>
								<p data-testid={`price-of-property-${i}`}>{property.price}</p>
								<input
									type="checkbox"
									aria-label="status"
									id="status"
									checked={property.status}
									onChange={() => handleStatusUpdate(property)}
								/>
								<p data-testid={`status-property-${i}`}>
									{property.status ? 'Active' : 'Expired'}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export { Card };
