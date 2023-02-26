import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { initialShopList } from "../../utils/mockData";
import rest from "../../utils/rest";
import "./style.scss";
import Btn, { LandingBtn, SubmitBtn } from "../styledComp/Btn";

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
      <h2>Try React query + styled component btns</h2>
      {shopData.isLoading && "LOADING..."}
      {shopData.isError && <p>{JSON.stringify(shopData.error)}</p>}
      <div>{JSON.stringify(shopData.data)}</div>
      <Btn onClick={() => newShopItemMutation.mutate()}>add pasta</Btn>
      <p>Below example of btn triggering nothing but with it's particular prop for color</p>
      <Btn col="teal">
        click me to trigger notthing
      </Btn>
      <p>{`Below an eample of styled btn with 'as' attribut to become an <a></a>`}</p>
      <LandingBtn as='a' >
        {`btn as <a> with styled comp (triggering nothing)`}
      </LandingBtn>
      <p>{`Example of putting the type='submit' attribute to a btn that could be reusable and exending the same styles of <Btn></Btn>`}</p>
      <SubmitBtn>{`I'm a submit btn triggering nothing`}</SubmitBtn>
    </div>
  );
};

export default TryUseQuery;
