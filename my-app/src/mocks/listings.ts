import { rest } from 'msw';
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
					status: true,
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
					status: true,
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
				{
					id: 6,
					image:
						'https://i0.wp.com/abouthouse.co.uk/wp-content/uploads/2020/08/st-johns-wood-nw8.jpg?fit=1600%2C1077&ssl=1',
					address: '52, Palmer Road, Newcastle, N13 3PO',
					bedrooms: '6 bedrooms',
					price: '£2,110,800',
					status: true,
				},
				{
					id: 7,
					image:
						'https://media.gq-magazine.co.uk/photos/5d139d663bedf26c6edb6eae/master/pass/Playboy-Mansion-GQ-12Jan16_getty_b.jpg',
					address: '77, Wakefield Avenue, London, W17 9AN',
					bedrooms: '7 bedrooms',
					price: '£5,170,800',
					status: false,
				},
				{
					id: 8,
					image: 'https://bcdhomes.com/wp-content/uploads/2018/10/97A7640.jpg',
					address: '45, Pettern Road, Kent, K16 2DW',
					bedrooms: '5 bedrooms',
					price: '£2,230,800',
					status: true,
				},
				{
					id: 9,
					image:
						'https://i.pinimg.com/originals/b0/1a/95/b01a95d81dac8df775b821fb15a02305.jpg',
					address: '4, Bolla Road, Portsmouth, P12 8EH',
					bedrooms: '5 bedrooms',
					price: '£1,290,800',
					status: true,
				},
				{
					id: 10,
					image:
						'https://i.pinimg.com/originals/33/4d/f2/334df2ad790ea01bf7f2230a6750d67a.jpg',
					address: '127, Debdale Avenue, Leeds, L34 2YE',
					bedrooms: '8 bedrooms',
					price: '£2,580,800',
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
