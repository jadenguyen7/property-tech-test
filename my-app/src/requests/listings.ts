import { Listing } from './listings.types'

export const getAllListings = async () => {
	const response = await fetch('/listings')
	if (!response.ok) {
		throw new Error(`Something went wrong`)
	}

	return await response.json()
}

export const putListing = async (listing: Listing): Promise<Listing> => {
	const headers: Record<string, string> = {}

	headers['Content-Type'] = 'application/json'

	const response = await fetch(`/listings`, {
		method: 'put',
		body: JSON.stringify(listing),
		headers,
	})

	if (!response.ok) {
		throw new Error(`Something went wrong`)
	}
	return await response.json()
}
