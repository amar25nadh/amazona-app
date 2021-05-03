import bcrypt from 'bcrypt'
const data = {
    users: [
      {
        name: 'Amar',
        email: 'adminn@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
      },
      {
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
      },
    ],
    

    products: [
        {
          
            name: 'Lithophane Keychain',
            category: 'Keychain',
            image: '/images/p1.jpg',
            price: 150,
            countInStock: 10,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {
            
            name: 'Heart shape Lithophane Keychain',
            category: 'Keychain',
            image: '/images/p2.jpg',
            price: 160,
            countInStock: 20,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {
         
            name: 'Lithophane Box - 3DPrint',
            category: 'Keychain',
            image: '/images/p3.jpg',
            price: 650,
            countInStock: 0,
            brand: 'abcs3d',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',

        },
        {
           
            name: 'Lithophane Plug - 3DPrint',
            category: 'Keychain',
            image: '/images/p4.jpg',
            price: 229,
            countInStock: 15,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',

        },
        {
          
            name: 'Customized Name Keychains | 3D Printed',
            category: 'Keychain',
            image: '/images/p5.jpg',
            price: 99,
            countInStock: 5,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {
            
            name: '3D Printed - Wall Decors | Stickers',
            category: 'Keychain',
            image: '/images/p6.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
          
            name: 'MARICCI Alphabet Name Keychains',
            category: 'Keychain',
            image: '/images/p7.jpg',
            price: 150,
            countInStock: 10,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {
            
            name: 'customized name keychain',
            category: 'Keychain',
            image: '/images/p8.jpg',
            price: 160,
            countInStock: 20,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {
         
            name: 'Wooden Name Key Chain',
            category: 'Keychain',
            image: '/images/p9.jpg',
            price: 650,
            countInStock: 0,
            brand: 'abcs3d',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',

        },
        {
           
            name: 'Brass Design Custom Name Keyrings',
            category: 'Keychain',
            image: '/images/p10.jpg',
            price: 229,
            countInStock: 15,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',

        },
        {
          
            name: 'NAME KEYCHAIN',
            category: 'Keychain',
            image: '/images/p11.jpg',
            price: 99,
            countInStock: 5,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {
            
            name: 'Rectangular Vehicle Name Key Chain, Size: Custom',
            category: 'Keychain',
            image: '/images/p12.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
            
            name: 'Personalized Key Chain',
            category: 'Keychain',
            image: '/images/p13.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
            
            name: 'Plastic Key Chains with Name',
            category: 'Keychain',
            image: '/images/p14.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
            
            name: 'Metal Name Keychain',
            category: 'Keychain',
            image: '/images/p15.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
            
            name: 'Brown and Black Wooden Name Keychain',
            category: 'Keychain',
            image: '/images/p16.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
            
            name: 'keychain with name, Packaging Type: Packet',
            category: 'Keychain',
            image: '/images/p17.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
            
            name: 'H.K Enterprises Stainless Steel SS 202 Name Key Chain',
            category: 'Keychain',
            image: '/images/p18.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
            
            name: 'Gold Name Keychain',
            category: 'Keychain',
            image: '/images/p19.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },
        {
            
            name: 'Double Name Keychain',
            category: 'Keychain',
            image: '/images/p20.jpg',
            price: 600,
            countInStock: 12,
            brand: 'abcs3d',
            rating: 4.5,
            numReviews: 50,
            description: 'high quality product',

        },

    ]
}
export default data;