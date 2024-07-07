import React from 'react'
import {
  QueryClient,
  QueryFunctionContext,
} from '@tanstack/react-query'
import axios from 'axios'

// Membuat client
const queryClient = new QueryClient()

// Definisikan tipe untuk produk
export interface Product {
  id: number
  name: string
  price: number
  description: string
}


// Fungsi untuk mengambil data produk
export async function getProducts(context: QueryFunctionContext): Promise<any> {
  const { data } = await axios.get('https://nizom-sale-open-api.vercel.app/api/product')
  return data
}
export async function getSales(context: QueryFunctionContext): Promise<any> {
  const { data } = await axios.get('https://nizom-sale-open-api.vercel.app/api/sale')
  return data
}


