import {useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDetail } from "../api/hello";
import DetailCard from "@/Components/Navbar/Cards/DetailCard";

const DetailPage = () => {
    const [detail, setDetail] = useState(null);
    const router = useRouter();
    const { id } = router.query;
  
    useEffect(() => {
      const getDetail = async () => {
        try {
          if (id) {
            const productDetail = await fetchDetail(id);
            setDetail(productDetail);
          }
        } catch (error) {
          console.error('Error fetching product detail:', error);
        }
      };
  
      getDetail();
    }, [id]);
  
    if (!detail) {
      return <div>Ürün detayı bulunamadı.</div>;
    }
  
    return (
      <div>
        <DetailCard product={detail} />
      </div>
    );
  };
  
  export default DetailPage;