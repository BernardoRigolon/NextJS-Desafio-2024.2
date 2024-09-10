import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Camisa Japão 2 2022',
      description: 'A smooth and responsive wireless mouse.',
      price: 29.99,
      createdAt: new Date(),
      image: '/japaobranca.png'
    },
    {
      title: 'Camisa Japão 1 2022',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      image: '/japaoazul.png'
    },
    {
      title: 'Camisa Fluminense 1 2019',
      description: 'Comfortable headphones with active noise cancelling.',
      price: 199.99,
      createdAt: new Date(),
      image: '/flu.png'
    },
    {
      title: 'Camisa Napoli 1 23/24',
      description: 'A high-resolution 4K monitor for professional use.',
      price: 399.99,
      createdAt: new Date(),
      image: '/napoli.png'
    },
    {
      title: 'Camisa Tupi 1 2019',
      description: 'A versatile USB-C hub with multiple ports.',
      price: 49.99,
      createdAt: new Date(),
      image: '/tupi.png'
    },
    {
      title: 'Camisa Fluminense 3 2023',
      description: 'A fast and portable SSD with 1TB capacity.',
      price: 129.99,
      createdAt: new Date(),
      image: '/flucartola.png'
    },
    {
      title: 'Camisa Mexico 2 2022',
      description: 'A compact Bluetooth speaker with excellent sound quality.',
      price: 59.99,
      createdAt: new Date(),
      image: '/mexico.png'
    },
    {
      title: 'Camisa Barcelona 1 22/23',
      description: 'A stylish smartwatch with fitness tracking features.',
      price: 149.99,
      createdAt: new Date(),
      image: '/barcelona.png'
    },
    {
      title: 'Camisa Fluminense 3 2012',
      description: 'An ergonomic gaming chair with lumbar support.',
      price: 249.99,
      createdAt: new Date(),
      image: '/flugrena.png'
    },
    {
      title: 'Camisa Brasil 1 1994',
      description: 'A high-definition webcam for video conferencing.',
      price: 79.99,
      createdAt: new Date(),
      image: '/brasil.png'
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
