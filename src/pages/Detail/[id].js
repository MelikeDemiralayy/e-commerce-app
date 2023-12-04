import {useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDet } from "../api/hello";
import DetailCard from "@/Components/Navbar/Cards/DetailCard";

const DetailPage = () => {
  const [detail, setDetail] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    if (id) {
      const getDetail = async () => {
        const productDet = await fetchDet(id);
        setDetail(productDet);
      };
      getDetail();
    }
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