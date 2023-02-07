import { Item } from "../../models/mainModels";
import './index.scss'

export const ShowShopList = ({
  shopList,
}: {
  shopList: Item[];
}): JSX.Element => {

  return (
    <table className="ShowShopList">
      <thead>
        <tr>
          <th>Name</th>
          <th>quantity</th>
        </tr>
      </thead>
      <tbody>
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