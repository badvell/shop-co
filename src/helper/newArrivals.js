import img1 from '../assets/new-arrivals/img-1.png';
import img2 from '../assets/new-arrivals/img-2.png';
import img3 from '../assets/new-arrivals/img-3.png';
import img4 from '../assets/new-arrivals/img-4.png';
import img5 from '../assets/new-arrivals/img-5.png';

const newArrivals = [
  {
    id: 1,
    img: img1,
    title: 'T-shirt with tape details',
    about:
      'Elevate your casual wardrobe with our T-Shirt with Tape Details. This stylish tee features unique tape accents that add a modern twist to a classic design. Crafted from soft, breathable fabric, it ensures all-day comfort whether you’re out with friends or lounging at home.',
    size: ['Small', 'Medium', 'Large', 'X-Large'],
    color: 'Black',
    rating: 4.5,
    newPrice: 120,
    reviews: [
      {
        id: 1,
        rating: 5,
        user: 'Samantha D.',
        comment: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
        posted: 'Posted on August 14, 2023',
      },
      {
        id: 2,
        rating: 4,
        user: 'Alex M.',
        comment: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
        posted: 'Posted on August 15, 2023',
      },
      {
        id: 3,
        rating: 3.5,
        user: 'Ethan R.',
        comment: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
        posted: 'Posted on August 16, 2023',
      },
      {
        id: 4,
        rating: 4,
        user: 'Olivia P.',
        comment: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
        posted: 'Posted on August 17, 2023',
      },
      {
        id: 5,
        rating: 4,
        user: 'Liam K.',
        comment: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
        posted: 'Posted on August 18, 2023',
      },
      {
        id: 6,
        rating: 4.5,
        user: 'Ava H.',
        comment: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
        posted: 'Posted on August 19, 2023',
      },
      {
        id: 7,
        rating: 5,
        user: 'Ava H.',
        comment: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
        posted: 'Posted on August 19, 2024',
      },
      {
        id: 8,
        rating: 5,
        user: 'Ava H.',
        comment: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
        posted: 'Posted on August 20, 2024',
      },
    ],
  },
  {
    id: 2,
    img: img2,
    title: 'Skinny Fit Jeans',
    about:
      'Discover the perfect blend of style and comfort with our Skinny Fit Jeans. Designed to hug your curves in all the right places, these jeans offer a sleek silhouette and versatile look for any occasion.',
    // size: ['Small', 'Medium', 'Large', 'X-Large'],
    color: 'White',
    rating: 3.5,
    newPrice: 240,
    oldPrice: 260,
    discount: '-20%',
    reviews: [
      {
        id: 45,
        user: 'Joe Doe',
        comment: '"Skinny Fit Jeans"',
        rating: 4.5,
        posted: 'Posted on August 16, 2024',
      },
    ],
  },
  {
    id: 3,
    img: img3,
    title: 'Checkered Shirt',
    about:
      'Add a touch of classic charm to your wardrobe with our Checkered Shirt. This versatile piece features a timeless plaid pattern, perfect for both casual outings and smart-casual events. Made from soft, breathable fabric, it promises comfort and style all day long.',
    size: 'Medium',
    color: 'White',
    rating: 4.5,
    newPrice: 180,
    reviews: [
      {
        id: 45,
        user: 'Joe Doe',
        comment: '"Checkered Shirt"',
        rating: 4.5,
        posted: 'Posted on August 16, 2023',
      },
    ],
  },
  {
    id: 4,
    img: img4,
    title: 'Sleeve Striped T-Shirt',
    about:
      'Brighten up your casual collection with our Sleeve Striped T-Shirt. Featuring bold striped sleeves and a classic body, this tee combines comfort and style for a fresh, modern look that’s perfect for any occasion.',
    size: 'Large',
    color: 'White',
    rating: 4.5,
    newPrice: 130,
    oldPrice: 160,
    discount: '-30%',
    reviews: [
      {
        id: 45,
        user: 'Joe Doe',
        comment: '"Sleeve Striped T-Shirt"',
        rating: 4.5,
        posted: 'Posted on August 16, 2023',
      },
    ],
  },
  {
    id: 5,
    img: img5,
    title: 'Gradient Graphic T-shirt',
    size: 'Small',
    color: 'White',
    rating: 3.5,
    newPrice: 145,
    reviews: [
      {
        id: 45,
        user: 'Joe Doe',
        comment: '""',
        rating: 4.5,
        posted: 'Posted on August 16, 2023',
      },
    ],
  },
  {
    id: 6,
    img: img3,
    title: 'Sleeve Striped T-Shirt',
    size: 'Large',
    rating: 4.5,
    newPrice: 130,
    oldPrice: 160,
    discount: '-30%',
    reviews: [
      {
        id: 45,
        user: 'Joe Doe',
        comment: '""',
        rating: 4.5,
        posted: 'Posted on August 16, 2023',
      },
    ],
  },
  {
    id: 7,
    img: img2,
    title: 'Sleeve Striped T-Shirt',
    size: 'Large',
    color: 'White',
    rating: 4.5,
    newPrice: 130,
    oldPrice: 160,
    discount: '-30%',
    reviews: [
      {
        id: 45,
        user: 'Joe Doe',
        comment: '""',
        rating: 4.5,
        posted: 'Posted on August 16, 2023',
      },
    ],
  },
  {
    id: 8,
    img: img1,
    title: 'T-shirt with tape details',
    size: 'X-Small',
    color: 'White',
    rating: 4.5,
    newPrice: 130,
    oldPrice: 160,
    discount: '-30%',
    reviews: [
      {
        id: 45,
        user: 'Joe Doe',
        comment: '""',
        rating: 4.5,
        posted: 'Posted on August 16, 2023',
      },
    ],
  },
];

export default newArrivals;
