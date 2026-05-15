import { AiOutlineShop, AiOutlineHome } from 'react-icons/ai'
import { BiRestaurant, BiWindow, BiWater } from 'react-icons/bi'
import { FaRecycle, FaAirbnb } from 'react-icons/fa'

import { GiGardeningShears, GiSteam } from 'react-icons/gi'

import { BiBuildingHouse } from 'react-icons/bi'



const services = [
    {
        name: 'Supermarkets services',
        image: <AiOutlineShop size={20} className='text-white' />,
        description: 'We understand that maintaining a clean and sanitary environment is crucial for supermarkets. Our team of experienced professionals offers comprehensive cleaning services for all areas of your supermarket, including floors, shelves, and restrooms. We use high-quality cleaning products and equipment to ensure that your supermarket is sparkling clean and safe for your customers and employees. Our flexible scheduling options and personalized service make it easy for you to keep your supermarket looking its best at all times. Trust us to keep your supermarket clean and inviting for your customers.',
        id: 1
    },
    {
        name: 'Restaurants services',
        image: <BiRestaurant size={20} className='text-white' />,
        description: 'We understand that maintaining a clean and sanitary environment is crucial for restaurants. Our team of experienced professionals offers comprehensive cleaning services for all areas of your restaurant, including dining areas, kitchens, and restrooms. We use high-quality cleaning products and equipment to ensure that your restaurant is sparkling clean and safe for your customers and employees. Our flexible scheduling options and personalized service make it easy for you to keep your restaurant looking its best at all times. Trust us to keep your restaurant clean and inviting for your customers.',
        id: 2
    },
    {
        name: 'Recycling machines services',
        image: <FaRecycle size={20} className='text-white' />,
        description: 'We understand that maintaining a clean and well-functioning environment is crucial for recycling machinery. Our team of experienced professionals offers comprehensive cleaning services for all types of recycling machinery, including conveyors, sorting equipment, and shredders. We use specialized cleaning products and equipment to remove debris, dust, and other contaminants from your machinery, ensuring that it runs smoothly and efficiently. Our flexible scheduling options and personalized service make it easy for you to keep your recycling machinery in top condition at all times. Trust us to keep your recycling machinery clean and functioning at its best.',
        id: 3
    },
    {
        name: 'Domestics services',
        image: <AiOutlineHome size={20} className='text-white' />,
        description: 'We understand that maintaining a clean and comfortable environment is important for your home. Our team of experienced professionals offers comprehensive cleaning services for all areas of your home, including bedrooms, bathrooms, kitchens, and living areas. We use high-quality cleaning products and equipment to ensure that your home is spotless and healthy for your family. Our flexible scheduling options and personalized service make it easy for you to keep your home looking its best at all times. Trust us to provide you with a clean and inviting home that you can be proud of.',
        id: 4
    },
    {
        name: 'Air BnB services',
        image: <FaAirbnb size={20} className='text-white' />,
        description: 'We understand that maintaining a clean and welcoming environment is essential for your AirBnB property. Our team of experienced professionals offers comprehensive cleaning services for all areas of your AirBnB, including bedrooms, bathrooms, kitchens, and living areas. We use high-quality cleaning products and equipment to ensure that your AirBnB is sparkling clean and ready for your guests. Our flexible scheduling options and personalized service make it easy for you to keep your AirBnB looking its best at all times. Trust us to provide you with a seamless and stress-free cleaning service for your AirBnB property, so you can focus on providing your guests with an exceptional experience.',
        id: 5
    },
    {
        name: 'Gardening services',
        image: <GiGardeningShears size={20} className='text-white' />,
        description: 'We understand that maintaining a clean and safe environment is crucial for gardens. Our team of experienced professionals offers comprehensive gardening services for all areas of your garden, including lawns, shrubs, and flowers. We use specialized products and equipment to keep your garden free from weeds, pests, and other contaminants, ensuring that it thrives in a healthy state. Our flexible scheduling options and personalized service make it easy for you to keep your garden looking its best at all times. Trust us to provide you with a clean and well-maintained garden that meets your high standards of beauty and safety.',
        id: 6
    },
    {
        name: 'Windows cleaning services',
        image: <BiWindow size={20} className='text-white' />,
        description: 'Our experienced team offers comprehensive window cleaning services for both residential and commercial properties. Using high-quality solutions and advanced equipment, we ensure streak-free and crystal-clear windows. Our flexible scheduling options and personalized service cater to your specific needs. Trust us to leave your windows spotless, allowing natural light to flow in and providing a clear view of the outside world. Enjoy the benefits of clean and gleaming windows with our professional and reliable service.',
        id: 7
    },
    {
        name: 'Steam cleaning services',
        image: <GiSteam size={20} className='text-white' />,
        description: 'Our experienced team provides comprehensive steam cleaning services for various surfaces. Using high-quality equipment and the power of steam, we effectively remove dirt, stains, and allergens, leaving your surfaces fresh and sanitized. With flexible scheduling and personalized service, we cater to your specific needs. Experience the transformative benefits of our professional and efficient steam cleaning service for a cleaner and healthier environment.',
        id: 8
    },
    {
        name: 'Water pressure services',
        image: <BiWater size={20} className='text-white' />,
        description: 'Our professional team utilizes high-pressure water to effectively remove dirt and contaminants from various surfaces. With state-of-the-art equipment, we deliver exceptional pressure washing services for residential and commercial properties. Our safe and thorough cleaning process revitalizes surfaces, enhances curb appeal, and extends the lifespan of your property. Trust our skilled team to provide efficient and reliable service, leaving your surfaces refreshed and free from debris. Experience the transformative power of pressure washing for a cleaner and more attractive environment.',
        id: 9
    },
    {
        name: 'Strata Cleaning services',
        image: <BiBuildingHouse size={20} className='text-white' />,
        description: 'We offer first-class deep cleaning services for residential and commercial properties. Our professional team uses advanced techniques and state-of-the-art equipment to effectively eliminate dirt and contaminants from surfaces. Our meticulous and safe cleaning process rejuvenates surfaces, enhances their appearance, and extends the lifespan of the property. You can trust our expert team to provide efficient and reliable service, leaving your surfaces refreshed and free from debris. Experience the transformative power of deep cleaning for a cleaner and more appealing environment.',
        id: 10
    },
]

export default services;