import book1 from "../../public/images/book1";
import book2 from "../../public/images/book2";
import book3 from "../../public/images/book3";
import book4 from "../../public/images/book4";
import book5 from "../../public/images/book5";
import book6 from "../../public/images/book6";


import quran1 from "../../public/images/quran1";
import quran2 from "../../public/images/quran2";
import quran3 from "../../public/images/quran3";
import quran4 from "../../public/images/quran4";
import quran5 from "../../public/images/quran5";

import fem1 from "../../public/images/fem1";
import fem2 from "../../public/images/fem2";
import fem3 from "../../public/images/fem3";
import fem4 from "../../public/images/child2";
import fem5 from "../../public/images/childfem1";


import prayer1 from "../../public/images/prayer1";
import prayer2 from "../../public/images/prayer2";
import prayer3 from "../../public/images/prayer3";
import prayer4 from "../../public/images/prayer4";
import prayer5 from "../../public/images/prayer5";

import male1 from "../../public/images/male1";
import male2 from "../../public/images/male2";
import male3 from "../../public/images/male3";
import male4 from "../../public/images/male4";






const products = [
    {
        id: "book1",
        productName: "Al-Madinah Tafseer Muyassar - Large Size",
        imgUrl: book1,
        category: "quran",
        price: 25,
        shortDesc: "Large size Quran with Tafseer Muyassar.",
        description: "Al-Madinah Tafseer Muyassar - Large Size. Easy to read and understand.",
        reviews: [
            { rating: 4.5, text: "Very helpful for understanding the Quran." },
        ],
        avgRating: 4.5,
    },
    {
        id: "book2",
        productName: "Explaining Issues Of Hajj Umrah & Ziyarah",
        imgUrl: book2,
        category: "book",
        price: 15,
        shortDesc: "A guide to Hajj, Umrah & Ziyarah.",
        description: "Explaining Issues Of Hajj Umrah & Ziyarah. A comprehensive guide.",
        reviews: [
            { rating: 4.7, text: "Very informative book." },
        ],
        avgRating: 4.7,
    },
    {
        id: "book3",
        productName: "Fi Amanillah: When The Heart breaks, But Allah Holds It",
        imgUrl: book3,
        category: "book",
        price: 18,
        shortDesc: "A book about healing and faith.",
        description: "Fi Amanillah: When The Heart breaks, But Allah Holds It. Find solace in Allah.",
        reviews: [
            { rating: 4.9, text: "A truly inspiring book." },
        ],
        avgRating: 4.9,
    },
    {
        id: "book4",
        productName: "inspiration from the quran",
        imgUrl: book4,
        category: "quran",
        price: 22,
        shortDesc: "Inspirational verses from the Quran.",
        description: "inspiration from the quran. Find guidance and motivation.",
        reviews: [
            { rating: 4.6, text: "Beautifully presented and insightful." },
        ],
        avgRating: 4.6,
    },
    {
        id: "book5",
        productName: "reedan jouranl and planner ,Clarifying Common Mistakes Widespread Among the Muslims",
        imgUrl: book5,
        category: "book",
        price: 20,
        shortDesc: "A journal and planner to organize your life and avoid common mistakes.",
        description: "reedan jouranl and planner ,Clarifying Common Mistakes Widespread Among the Muslims. Stay organized and informed.",
        reviews: [
            { rating: 4.4, text: "A useful tool for daily life." },
        ],
        avgRating: 4.4,
    },
    {
        id: "book6",
        productName: "reedan jouranl and planner ,Clarifying Common Mistakes Widespread Among the Muslims",
        imgUrl: book6,
        category: "book",
        price: 20,
        shortDesc: "A journal and planner to organize your life and avoid common mistakes.",
        description: "reedan jouranl and planner ,Clarifying Common Mistakes Widespread Among the Muslims. Stay organized and informed.",
        reviews: [
            { rating: 4.4, text: "A useful tool for daily life." },
        ],
        avgRating: 4.4,
    },
    {
        id: "quran1",
        productName: "Quran",
        imgUrl: quran1,
        category: "quran",
        price: 30,
        shortDesc: "The Holy Quran.",
        description: "The Holy Quran in Arabic.",
        reviews: [
            { rating: 4.9, text: "The word of Allah." },
        ],
        avgRating: 4.9,
    },
    {
        id: "quran2",
        productName: "Quran",
        imgUrl: quran2,
        category: "quran",
        price: 30,
        shortDesc: "The Holy Quran.",
        description: "The Holy Quran in Arabic.",
        reviews: [
            { rating: 4.9, text: "The word of Allah." },
        ],
        avgRating: 4.9,
    },
    {
        id: "quran3",
        productName: "Quran",
        imgUrl: quran3,
        category: "quran",
        price: 30,
        shortDesc: "The Holy Quran.",
        description: "The Holy Quran in Arabic.",
        reviews: [
            { rating: 4.9, text: "The word of Allah." },
        ],
        avgRating: 4.9,
    },
    {
        id: "quran4",
        productName: "Quran",
        imgUrl: quran4,
        category: "quran",
        price: 30,
        shortDesc: "The Holy Quran.",
        description: "The Holy Quran in Arabic.",
        reviews: [
            { rating: 4.9, text: "The word of Allah." },
        ],
        avgRating: 4.9,
    },
        {
        id: "quran5",
        productName: "Quran",
        imgUrl: quran5,
        category: "quran",
        price: 30,
        shortDesc: "The Holy Quran.",
        description: "The Holy Quran in Arabic.",
        reviews: [
            { rating: 4.9, text: "The word of Allah." },
        ],
        avgRating: 4.9,
    },
   
    {
        id: "women1",
        productName: "Raihana Prayer Dress, Zipper, Pistachio Color",
        imgUrl: fem1,
        category: "women",
        price: 45,
        shortDesc: "Elegant prayer dress with zipper.",
        description: "Raihana Prayer Dress, Zipper, Pistachio Color. Comfortable and stylish.",
        reviews: [
            { rating: 4.8, text: "Beautiful and comfortable." },
        ],
        avgRating: 4.8,
    },
    {
        id: "women2",
        productName: "Raihana Prayer Dress, Zipper, Brown Color",
        imgUrl: fem2,
        category: "women",
        price: 45,
        shortDesc: "Elegant prayer dress with zipper.",
        description: "Raihana Prayer Dress, Zipper, Brown Color. Comfortable and stylish.",
        reviews: [
            { rating: 4.8, text: "Beautiful and comfortable." },
        ],
        avgRating: 4.8,
    },
    {
        id: "women3",
        productName: "Raihana Prayer Dress, Wrap, Cumin",
        imgUrl: fem3,
        category: "women",
        price: 40,
        shortDesc: "Elegant prayer dress with wrap.",
        description: "Raihana Prayer Dress, Wrap, Cumin. Comfortable and stylish.",
        reviews: [
            { rating: 4.6, text: "Lovely prayer dress." },
        ],
        avgRating: 4.6,
    },
    {
        id: "mat1",
        productName: "Portable Women Prayer Set, #2520 Black",
        imgUrl: prayer1,
        category: "women mat",
        price: 25,
        shortDesc: "Portable prayer set for women.",
        description: "Portable Women Prayer Set, #2520 Black. Convenient for travel.",
        reviews: [
            { rating: 4.7, text: "Very practical and useful." },
        ],
        avgRating: 4.7,
    },
    {
        id: "mat2",
        productName: "Raihana Female Prayer Mat, Beige color",
        imgUrl: prayer2,
        category: "women mat",
        price: 30,
        shortDesc: "Comfortable prayer mat for women.",
        description: "Raihana Female Prayer Mat, Beige color. Soft and comfortable.",
        reviews: [
            { rating: 4.9, text: "Excellent quality." },
        ],
        avgRating: 4.9,
    },
    {
        id: "mat3",
        productName: "Al-Atheer Prayer Mats, Blue",
        imgUrl: prayer3,
        category: "women mat",
        price: 35,
        shortDesc: "High-quality prayer mat.",
        description: "Al-Atheer Prayer Mats, Blue. Durable and comfortable.",
        reviews: [
            { rating: 4.8, text: "Great prayer mat." },
        ],
        avgRating: 4.8,
    },
    {
        id: "mat4",
        productName: "Raihana Female Prayer Mat, off-white color",
        imgUrl: prayer4,
        category: "women mat",
        price: 30,
        shortDesc: "Comfortable prayer mat for women.",
        description: "Raihana Female Prayer Mat, off-white color. Soft and comfortable.",
        reviews: [
            { rating: 4.9, text: "Excellent quality." },
        ],
        avgRating: 4.9,
    },
    {
        id: "mat5",
        productName: "prayer rug",
        imgUrl: prayer5,
        category: "women mat",
        price: 28,
        shortDesc: "Comfortable prayer rug.",
        description: "Comfortable prayer rug for daily prayers.",
        reviews: [
            { rating: 4.6, text: "Soft and comfortable." },
        ],
        avgRating: 4.6,
    },
    {
        id: "male1",
        productName: "Chestnut & Beige Striped Hooded Thobe",
        imgUrl: male1,
        category: "male",
        price: 55,
        shortDesc: "Stylish hooded thobe for men.",
        description: "Chestnut & Beige Striped Hooded Thobe. Comfortable and fashionable.",
        reviews: [
            { rating: 4.7, text: "Great fit and design." },
        ],
        avgRating: 4.7,
    },
    {
        id: "male2",
        productName: "Midnight Black Striped Hooded Thobe",
        imgUrl: male2,
        category: "male",
        price: 55,
        shortDesc: "Stylish hooded thobe for men.",
        description: "Midnight Black Striped Hooded Thobe. Comfortable and fashionable.",
        reviews: [
            { rating: 4.7, text: "Great fit and design." },
        ],
        avgRating: 4.7,
    },
    {
        id: "male3",
        productName: "Ebony Black Lungi Izar Wrap",
        imgUrl: male3,
        category: "male",
        price: 20,
        shortDesc: "Traditional Lungi Izar Wrap for men.",
        description: "Ebony Black Lungi Izar Wrap. Comfortable and traditional.",
        reviews: [
            { rating: 4.5, text: "Good quality and comfortable." },
        ],
        avgRating: 4.5,
    },
    {
        id: "male3",
        productName: "Ebony Black Lungi Izar Wrap",
        imgUrl: male4,
        category: "male",
        price: 20,
        shortDesc: "Traditional Lungi Izar Wrap for men.",
        description: "Ebony Black Lungi Izar Wrap. Comfortable and traditional.",
        reviews: [
            { rating: 4.5, text: "Good quality and comfortable." },
        ],
        avgRating: 4.5,
    },
    {
        id: "child1",
        productName: "Pink - Plain Girl size (2-piece) Hijab Al-Amira",
        imgUrl: fem4,
        category: "child",
        price: 25,
        shortDesc: "Cute and comfortable hijab for girls.",
        description: "Pink - Plain Girl size (2-piece) Hijab Al-Amira. Easy to wear.",
        reviews: [
            { rating: 4.8, text: "My daughter loves it." },
        ],
        avgRating: 4.8,
    },
    {
        id: "child2",
        productName: "White Plain Girl size (2-piece) Hijab",
        imgUrl: fem5,
        category: "child",
        price: 25,
        shortDesc: "Simple and comfortable hijab for girls.",
        description: "White Plain Girl size (2-piece) Hijab. Easy to wear.",
        reviews: [
            { rating: 4.8, text: "My daughter loves it." },
        ],
        avgRating: 4.8,
    },
];

export default products;