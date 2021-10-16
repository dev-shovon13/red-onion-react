// import breakfast1 from '../images/Breakfast/breakfast1.png';
// import breakfast2 from '../images/Breakfast/breakfast2.png';
// import breakfast3 from '../images/Breakfast/breakfast3.png';
// import breakfast4 from '../images/Breakfast/breakfast4.png';
// import breakfast5 from '../images/Breakfast/breakfast5.png';
// import breakfast6 from '../images/Breakfast/breakfast6.png';
// import lunch1 from '../images/lunch/lunch1.png';
// import lunch2 from '../images/lunch/lunch2.png';
// import lunch3 from '../images/lunch/lunch3.png';
// import lunch4 from '../images/lunch/lunch4.png';
// import lunch5 from '../images/lunch/lunch5.png';
// import lunch6 from '../images/lunch/lunch6.png';
// import dinner1 from '../images/Dinner/dinner1.png';
// import dinner2 from '../images/Dinner/dinner2.png';
// import dinner3 from '../images/Dinner/dinner3.png';
// import dinner4 from '../images/Dinner/dinner4.png';
// import dinner5 from '../images/Dinner/dinner5.png';
// import dinner6 from '../images/Dinner/dinner6.png';


// https://ibb.co/bz32HWR
// https://ibb.co/GJ9VM4m
// https://ibb.co/4JKmPJ4
// https://ibb.co/FmYNgQb
// https://ibb.co/mhbv5fM
// https://ibb.co/PM4MWvp



// https://ibb.co/PxGTHdY
// https://ibb.co/Pj3JSx3
// https://ibb.co/Z8GcjkC
// https://ibb.co/T2jwV1f
// https://ibb.co/3pCZv0T
// https://ibb.co/F5NgKTk



// https://ibb.co/YkMdffv
// https://ibb.co/LtHHqLp
// https://ibb.co/QpDcGDx
// https://ibb.co/YNT0mp1
// https://ibb.co/m8jRwXh
// https://ibb.co/kDCYHvB

const foods = [
	{
		id: 0,
		type: 'Breakfast',
		slug: 'breakfast',
		items: [{
			id: 0,
			name: 'Bagel and cream cheese',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 6.99,
			img: "https://i.ibb.co/6gZ1vnJ/breakfast1.png",
		},
		{
			id: 1,
			name: 'Breakfast sandwich',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 9.99,
			img: "https://i.ibb.co/9vhq4kP/breakfast2.png"
		},
		{
			id: 2,
			name: 'Baked chicken',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 10.99,
			img: "https://i.ibb.co/Fnmxgn8/breakfast3.png"
		},
		{
			id: 3,
			name: 'Toast croissant fried egg',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 8.99,
			img: "https://i.ibb.co/rFpT4BG/breakfast4.png"
		},
		{
			id: 4,
			name: 'Eggs benedict',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 19.99,
			img: "https://i.ibb.co/qm70YTP/breakfast5.png"
		},
		{
			id: 5,
			name: 'Full breakfast fried egg toast bunch',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 3.99,
			img: "https://i.ibb.co/3vWvF9X/breakfast6.png"
		}
		]
	},
	{
		id: 1,
		type: 'Lunch',
		slug: 'lunch',
		items: [{
			id: 0,
			name: 'Healthy meal plan',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 23.99,
			img: "https://i.ibb.co/R2ThwqS/lunch1.png"
		},
		{
			id: 1,
			name: 'fried chicken steam',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 9.99,
			img: "https://i.ibb.co/vqgft1g/lunch2.png"
		},
		{
			id: 2,
			name: 'tarragon-rubbed-salmon',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 6.99,
			img: "https://i.ibb.co/58Gs0fV/lunch3.png"
		},
		{
			id: 3,
			name: 'Indian lunch',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 8.99,
			img: "https://i.ibb.co/9gKpFhD/lunch4.png"
		},
		{
			id: 4,
			name: 'chicken steak',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 15.99,
			img: "https://i.ibb.co/Pc6HM5r/lunch5.png"
		},
		{
			id: 5,
			name: 'honey-soy-glazed salmon with peppers',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 7.99,
			img: "https://i.ibb.co/K2RFXvc/lunch6.png"
		}
		]
	},
	{
		id: 2,
		type: 'Dinner',
		slug: 'dinner',
		items: [{
			id: 0,
			name: 'salmon with grapefruit and lentil salad',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 9.99,
			img: "https://i.ibb.co/85pxPPF/dinner1.png"
		},
		{
			id: 1,
			name: 'lemony salmon piccata',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 10.99,
			img: "https://i.ibb.co/0MvvWgJ/dinner2.png"
		},
		{
			id: 2,
			name: 'lamb tenderloin with quinoa pilaf',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 61.99,
			img: "https://i.ibb.co/gm47C4c/dinner3.png"
		},
		{
			id: 3,
			name: 'french fries with cheese',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 28.99,
			img: "https://i.ibb.co/CwsPghY/dinner4.png"
		},
		{
			id: 4,
			name: 'Garlic butter baked salmon',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 19.99,
			img: "https://i.ibb.co/9tDpLVy/dinner5.png"
		},
		{
			id: 5,
			name: 'baked chicken',
			title: 'How we dream about our future',
			info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
			price: 9.99,
			img: "https://i.ibb.co/z2vKnDx/dinner6.png"
		}
		]
	}
];

export default foods;