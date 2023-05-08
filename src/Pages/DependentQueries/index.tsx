import {
  fetchHeroes,
  fetchStoresById,
  fetchSupplierById,
} from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/auth";
import { Heroes } from "../../models/mainModels";
import "./style.scss";

export const DependentQueries = () => {
  const { favourriteSuperHero } = useAppContext();
  const [heroStoreId, setHeroStoreId] = useState<number>();
  console.log(`favourriteSuperHero --->  `, favourriteSuperHero);

  const { data: HeroRowData } = useQuery(["getFavHero"], () => fetchHeroes());
  const heroData: Heroes = HeroRowData?.data;

  useEffect(() => {
    if (heroData && favourriteSuperHero)
      setHeroStoreId(
        heroData.find(e => e.name === favourriteSuperHero)?.merchandiseStoreId
      );
  }, [heroData, favourriteSuperHero]);

  const { data: storeData } = useQuery(
    ["fetch store"],
    () => fetchStoresById(heroStoreId || 0),
    {
      enabled: !!heroStoreId,
    }
  );

  const { data: supplierData } = useQuery(
    ["fetch supplier"],
    () => fetchSupplierById(storeData?.data.supplierId || 0),
    {
      enabled: !!storeData,
    }
  );

  console.log(`storeData --->  `, supplierData);

  return (
    <div className="dipendentQuery">
      <h4>{`From favorite hero by user in context -> get hero form query( which has also store id in his obj) -> to call dependent query getStore which return also suppliers ids -> then make last dependent call to get supplier and display it to the user here below:`}</h4>
      <pre>{JSON.stringify(supplierData?.data)}</pre>
    </div>
  );
};

export default DependentQueries;
