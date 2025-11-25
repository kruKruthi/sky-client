import React from "react";
import { Card } from "../../Card/Card";
import  {Button} from "../../Button/Button";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  id: string
  title: string;
  description: string;
  images: { url: string }[];
};

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, images }) => {
// const ProductCard: React.FC<ProductCardProps> = () => {
  const navigate = useNavigate()

  return (
    <Card className="rounded-2xl shadow-md p-4 flex flex-col justify-between h-96">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 text-center">{title}</h2>
        <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
        <div className="flex justify-center items-center gap-3 mt-4">
          <Button variant="outline" className="rounded-sm px-4 py-2 text-blue-700 border-2 border-blue-600 cursor-pointer" onClick={() => navigate(`/product/${"id"}`)}>
            See all deals
          </Button>
          <Button className="rounded-sm px-4 py-[10px] bg-blue-700 text-white hover:bg-blue-800 cursor-pointer">
            Buy now
          </Button>
        </div>
      </div>
 
      <div
        className={`mt-2 grid gap-2 h-44`}
      >
        <div className="rounded-xl overflow-hidden flex items-center justify-center">
            {/* <img src={"https://www.dishtv.in/adobe/dynamicmedia/deliver/dm-aid--c8dc3f5c-3900-4166-b368-ab5a13ca2487/NewjourneymobBanner.png.webp?preferwebp=true"} alt={'text'} className="w-full h-full object-contain" /> */}
          
        {images.map((img, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden flex items-center justify-center">
            <img src={img.url} alt={`${title}-${idx}`} className="w-full h-full object-contain" />
          </div>
        ))}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
