import ProductCard from "./ProductCard";
// import { useProducts } from "../../../graphql/hooks";
// import type { Product } from "../../../graphql/queries";
import NotificationBanner from "../Notification/Notification";
import { useContext, useEffect } from "react";
import { NotificationContext } from "../../../context/NotificationContext";
import HeroBanner from "../../HeroBanner/HeroBanner";

const ProductList = () => {

  // const { loading, error, products } = useProducts();
  const notificationContext = useContext(NotificationContext);

  useEffect(() => {
    notificationContext?.setNotification?.({
      title: "Sky Essential TV only £15, Sky TV's lowest ever price | See all deals",
    });
  }, []);

  // if (loading) {
  //   return <h1>Loading products...</h1>;
  // }

  // if (error) {
  //   return <h1>Error loading products...</h1>;
  // }

  return (
    <>
      {notificationContext?.notification && (
        <NotificationBanner
          title={notificationContext.notification.title}
          onClose={() => notificationContext.setNotification?.(null)}
        />
      )}
      <HeroBanner/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mx-6 max-w-5x p-6">
        {/* {products.map((product:Product) => (
          <ProductCard key={product.id} {...product} />
        ))} */}
        <ProductCard id={""} title={""} description={""} images={[]}/>
      </div>
    </>
    
  );
};
 
export default ProductList;
