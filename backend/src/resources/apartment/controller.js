//include (get something from the same model)
//select (connects models with relationship)
//connect (on create/update if you have to connect a model to another)

const fetch = require('node-fetch')
// import fetch from 'node-fetch'
// const fetch = (...args) =>
// 	import('node-fetch').then(({ default: fetch }) => fetch(...args))
// https://geocode.xyz/${address}?json=1&auth=434249204703844806348x95363
// api.postcodes.io/postcodes/RH194SA
const address = 'RH19 4SA'
const response = fetch(`https://api.postcodes.io/postcodes/${address}`)
	.then(resp => resp.json())
	.then(data => console.log(data.result.longitude))
// console.log('address longitude: ', response.result.longitude)
// const data = await response.json()
// console.log(data)

const { apartment } = require('../../utils/dbClient')

//CREATE ONE USER'S APARTMENT
async function createOneApartment(req, res) {
	const userOwnerId = req.params.id
	console.log('userOwnerId: ', userOwnerId)
	const {
		priceNight,
		bedrooms,
		maxPeopleIn,
		description,
		city,
		postCode,
		road,
		imageUrl1,
		imageUrl2,
		imageUrl3,
		wifi,
		smartTV,
		microwave,
		coffeeMaker,
		hotTub,
		parkingSpace,
		garden,
		pool,
		gym,
	} = req.body

	const newApartment = {
		priceNight,
		bedrooms,
		maxPeopleIn,
		description,
		city,
		postCode,
		road,
		imageUrl1,
		imageUrl2,
		imageUrl3,
		extra: {
			create: {
				wifi,
				smartTV,
				microwave,
				coffeeMaker,
				hotTub,
				parkingSpace,
				garden,
				pool,
				gym,
			},
		},
		location: {
			create: {
				latitude,
				longitude,
			},
		},
	}

	const createdApartment = await apartment.create({
		data: {
			...newApartment,
			userOwner: {
				connect: {
					id: parseInt(userOwnerId),
				},
			},
		},
	})
	res.json({ data: createdApartment })
}

//GET ONE USER'S APARTMENT
// const getOneApartment = async (req, res) => {
// 	const { id } = req.params

// 	const oneApartment = await apartment.findUnique({
// 		where: {
//       id: parseInt(id)
//     },
// 	})
// 	res.json({ data: oneApartment })
// }

module.exports = { createOneApartment }
