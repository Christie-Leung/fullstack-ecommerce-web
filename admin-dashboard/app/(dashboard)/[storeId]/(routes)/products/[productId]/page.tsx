import prismadb from "@/lib/prismadb";
import { ProductForm } from "./components/product-form";

const ProductPage = async ({
  params
}: {
  params: { productId: string }
}) => {

  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId
    },
    include: {
      images: true
    }
  });

  if (!product) {

  }

  return ( 
    <div className="flex-col">
      <div className="flex-01 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} />
      </div>
    </div>
   );
}
 
export default ProductPage;