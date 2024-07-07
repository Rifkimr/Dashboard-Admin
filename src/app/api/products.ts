import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  // Tambahkan produk lainnya
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}