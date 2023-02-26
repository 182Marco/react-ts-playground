import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { initialShopList } from "../../utils/mockData";
import rest from "../../utils/rest";
import "./style.scss";
import Btn, { LandingBtn, SubmitBtn } from "../styledComp/Btn";
import SpinningLogo from "../styledComp/SpinningLogo";

export const TryUseQuery = () => {
  const shopData = useQuery(["initialShopList"], () =>
    rest(3000).then(() => [...initialShopList])
  );

  const queryClient = useQueryClient();

  const newShopItemMutation = useMutation({
    mutationFn: () =>
      rest(1000).then(() =>
        initialShopList.push({ id: 3, name: "Pasta", quantity: "6" })
      ),
    onSuccess: () => queryClient.invalidateQueries(["initialShopList"]),
  });

  console.log("shopData.isError: ", shopData.isError);
  console.log("shopData.data: ", shopData.data);
  return (
    <div className="TryUseQuery">
      <h2>Try React query</h2>
      {shopData.isLoading && "LOADING..."}
      {shopData.isError && <p>{JSON.stringify(shopData.error)}</p>}
      <div>{JSON.stringify(shopData.data)}</div>
      <button onClick={() => newShopItemMutation.mutate()}>add pasta</button>
    </div>
  );
};

export default TryUseQuery;
