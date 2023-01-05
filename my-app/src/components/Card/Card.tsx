import { FC, useEffect, useState } from 'react';
import { Listing } from '../../requests/listings.types';
import styles from './Card.module.css';
import { getAllListings, putListing } from '../../requests/listings';

type PropertyProps = {
	id: number;
	image: string;
	address: string;
	bedrooms: string;
	price: string;
	status: boolean;
};

const Card: FC = () => {
	let [properties, setProperties] = useState<Listing[]>([]);
	const [isShowActive, setIsShowActive] = useState(true);

	const handleStatusUpdate = async (listing: Listing) => {
		if (!listing.id || listing === null) {
			return;
		}

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
			const response = await getAllListings();
			const data = await response;

			setProperties(data);
		};
		getListings();
	}, []);

	return (
		<>
			<div className={styles.filter}>
				<input
					type="radio"
					id="active"
					name="status"
					value="active"
					checked={isShowActive}
					onChange={() => setIsShowActive(true)}
				/>
				<label htmlFor="active" className={styles.label}>
					Active
				</label>
				<input
					type="radio"
					id="expired"
					name="status"
					value="expired"
					checked={!isShowActive}
					onChange={() => setIsShowActive(false)}
				/>
				<label htmlFor="expired" className={styles.label}>
					Expired
				</label>
			</div>

			{properties
				.filter((property) => {
					if (isShowActive) {
						return property.status;
					} else {
						return !property.status;
						// if (property.status === true) {
						// 	return true
						// } else {
						// 	return false
						// }
					}
				})
				.map((property: PropertyProps, i) => (
					<div className={styles.cardContainer} key={i}>
						<div
							data-testid={`card-${property.id}`}
							className={`${styles.card} ${
								!property.status ? styles.expiredStyle : ''
							}`}
						>
							<img
								src={property.image}
								alt="property"
								aria-label={`property-${property.id}`}
								className={styles.image}
							/>
							<div className={styles.container}>
								<h3>Property {property.id}</h3>
								<h4>{property.address}</h4>
								<p data-testid={`bedrooms-for-property-${property.id}`}>
									{property.bedrooms}
								</p>
								<p data-testid={`price-of-property-${property.id}`}>
									{property.price}
								</p>
								<input
									type="checkbox"
									aria-label={`checkbox-status-property-${property.id}`}
									id={`checkbox-status-property-${property.id}`}
									checked={property.status}
									onChange={() => handleStatusUpdate(property)}
								/>
								<p data-testid={`status-property-${property.id}`}>
									{property.status ? 'Active' : 'Expired'}
								</p>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export { Card };
