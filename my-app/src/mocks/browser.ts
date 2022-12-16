import { setupWorker, rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { Listing } from '../requests/listings.types';

export const getAllListingsHandler = [
	rest.get('/listings', (_, res, ctx) => {
		return res(
			ctx.json([
				{
					id: 1,
					image:
						'https://www.hollywoodreporter.com/wp-content/uploads/2018/09/4w9a7856sky_v2-h_2018.jpg?w=1296&h=730&crop=1',
					address: '29, Blake Road, London, Greater London E27 6NP',
					bedrooms: '4 bedrooms',
					price: '£2,250,000',
					status: true,
				},
				{
					id: 2,
					image:
						'https://media.istockphoto.com/id/682432560/photo/stunning-luxury-home-exterior-at-sunset.jpg?s=612x612&w=0&k=20&c=NApF0vAI8wppLkNX73wWRxXUO2nyLHCB6peu38k2rtI=',
					address: '15, Peakdale Road, Manchester, M43 8PS',
					bedrooms: '7 bedrooms',
					price: '£2,140,800',
					status: false,
				},
				{
					id: 3,
					image:
						'https://static.standard.co.uk/homesandproperty/s3fs-public/thumbnails/image/2018/04/26/15/3-the-grove.jpg?width=968',
					address: '7, Savil Road, Leeds, L08 3AH',
					bedrooms: '4 bedrooms',
					price: '£1,940,800',
					status: false,
				},
				{
					id: 4,
					image:
						'https://media.onthemarket.com/properties/7293545/1197654805/image-0-1024x1024.jpg',
					address: '12, Albion Drive, London, SW9 2UH',
					bedrooms: '5 bedrooms',
					price: '£2,830,800',
					status: false,
				},
				{
					id: 5,
					image:
						'http://www.caandesign.com/wp-content/uploads/2015/04/The-Dream-Mansion-in-London-by-Harrison-Varma-1.jpg',
					address: '84, Sandringham Avenue, Manchester, M43 9AW',
					bedrooms: '7 bedrooms',
					price: '£3,190,800',
					status: false,
				},
			])
		);
	}),
];

export const putListingHandler = [
	rest.put<Listing>('/listings', async (req, res, ctx) => {
		const { id, image, address, bedrooms, price, status }: Listing =
			await req.json();
		return res(
			ctx.json({
				id: id,
				image: image,
				address: address,
				bedrooms: bedrooms,
				price: price,
				status: status,
			})
		);
	}),
];
