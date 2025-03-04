// lib/imageUrl.js
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client' 

const builder = imageUrlBuilder(client)

export function urlFor(source:string) {
  return builder.image(source)
}
