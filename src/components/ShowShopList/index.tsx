import { Item } from "../../models/mainModels";

export const ShowShopList = ({
  shopList,
}: {
  shopList: Item[];
}): JSX.Element => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>quantity</th>
        </tr>
      </thead>
      <tbody className="ShowShopList">
        {shopList.map(e => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.quantity? e.quantity : ''}</td> 
            {/*otherwise you get NaN inside template */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowShopList;