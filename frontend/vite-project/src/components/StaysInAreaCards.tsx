import React, { useState } from 'react'

import { useHistory } from 'react-router'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styled from 'styled-components'

const CardsContainer = styled.ul`
	display: grid;
	grid-template-rows: 250px;

	height: 500px;

	padding-right: 1rem;
`

const CardContainer = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;

  border-top: 1px solid grey;

  padding: 0px 0.25rem;

  height: 250px; 
  width: auto;

  
  
  .image {
    display: grid;
    place-items: center;

    padding: 0.5rem;
  }

  .image img {
    width:280px;
    border-radius: 20px;
  }

  .data {
    display: grid;

    padding: 1.5rem 0.5rem;    
  }

  .info {
    display: grid;
    grid-gap: 1rem;
  }

  .price {
    display: grid;
    place-items: end;
  }

  .no-wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .no-bold {
    font-weight: unset;
  }

  .grey {
    color: grey;
  }
  
}
`

export default function StaysInAreaCards({ apartments }) {
	const history = useHistory()
	const [swiperRef, setSwiperRef] = useState('')

	return (
		// <Swiper
		//   onSwiper={setSwiperRef}
		//   slidesPerView={1}
		//   spaceBetween={0}
		//   loop={true}
		//   pagination={{
		//     clickable: true,
		//   }}
		//   navigation={true}
		//   className="mySwiper"
		// >
		<CardsContainer>
			{apartments.map((apartment, index) => (
				<CardContainer
					key={index}
					onClick={() => {
						history.push(`/apartment/${apartment.id}`)
					}}>
					{/* <Swiper
							onSwiper={setSwiperRef}
							slidesPerView={1}
							spaceBetween={0}
							loop={true}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							className="mySwiper"> */}

					<Swiper
						pagination={{
							type: 'fraction',
						}}
						navigation={true}
						className="mySwiper">
						<SwiperSlide>
							<div className="image">
								<img
									src={apartment.imageUrl1}
									alt="yeet"
									height="200px"
									width="300px"
								/>
							</div>
						</SwiperSlide>
						{/* <SwiperSlide> */}
						{/* <div className="image">
								<img
									src={apartment.imageUrl2}
									alt="yeet"
									height="200px"
									width="300px"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="image">
								<img
									src={apartment.imageUrl3}
									alt="yeet"
									height="200px"
									width="300px"
								/>
							</div> */}
						{/* </SwiperSlide> */}
					</Swiper>

					<div className="data">
						<div className="info">
							<p className="grey">Private apartment at {apartment.road}</p>
							<h1 className="no-bold">
								{apartment.city} {apartment.postCode}
							</h1>
							<p className="grey">
								{apartment.maxPeopleIn} guests &bull; {apartment.bedrooms}{' '}
								bedrooms
							</p>
							<p className="no-wrap grey">{apartment.description}</p>
						</div>
						<div className="price">
							<h2 className="no-bold">${apartment.priceNight}/night</h2>
						</div>
					</div>
				</CardContainer>
			))}
		</CardsContainer>
	)
}
