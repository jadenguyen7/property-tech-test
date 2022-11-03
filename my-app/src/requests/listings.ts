import { Listing } from "./listings.types";

const putListing = async (listing: Listing): Promise<Listing> => {

const response = await fetch(`/listings`, {
    method: 'put',
    body: JSON.stringify(listing),
});

if (!response.ok) { 
    throw new Error(
        `Something went wrong`
    )
}
return await response.json();
}