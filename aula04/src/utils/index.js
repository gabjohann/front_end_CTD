import axios from 'axios';

/**
 * Função que recebe o ano de nascimento de um usuário e retorna sua idade.
 * @author Lucas Gabriel Fernandes Johann
 * @param {number} year
 * @returns {number}
 */

export function calculateAge(year) {
  const currentYear = 2023;

  return currentYear - year;
}

/**
 * Função que recebe uma lista de números e retorna apenas os números pares
 * @param {Array<number>} numbers
 * @returns {Array<number>}
 */

export function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

/**
 * Função que busca no servidor as informações de um produto
 * @param {number} id
 * @returns {Promise<{id: number, title: string, description: string}}
 */

export async function getProduct(id) {
  return await axios.get(`https://dummyjson.com/products/${id}`);
}
