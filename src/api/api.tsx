import axios from "axios";
import { Product } from "../model/Product";


const API_BASE_URL = 'http://localhost:4040';

export const fetchProducts = async ():Promise<Array<Product>> => {
  const response = await axios.get<Array<Product>>(`${API_BASE_URL}/products`);
    
  return response.data;
};

let arr:number[]=[1,2,3]
let b:[number,number,number]=[1,2,3]