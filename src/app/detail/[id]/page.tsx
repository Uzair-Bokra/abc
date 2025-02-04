// ShopItemServer.tsx (Server Component)
import ShopItemClient from "@/components/ShopItemClient/ShopItemClient";
import { client } from "@/sanity/lib/client";

type Product = {
  name: string;
  price: number;
  slug: string;
  imageUrl: string;
  originalPrice?: number;
  id: number;
};

async function getData(slug:string): Promise<Product> {
  const query = `*[_type == "food" && slug.current == $slug][0]{
    id,
    "slug": slug.current,
    name,
    price,
    "imageUrl": image.asset->url
}
`;
  const fetchData = await client.fetch<Product>(query,{slug});
  return fetchData;
}

const ShopItemServer = async ({ params }: { params: Promise<{ id: string }> }) => {
  
  const product = await getData((await params).id)

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ShopItemClient product={product} />;
};

export default ShopItemServer;