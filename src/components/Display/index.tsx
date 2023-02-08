import useSWR from "swr";
import "./style.scss";

export const Display = ({ url } : { url: string }) => {

  const { data } = useSWR(
    url,
    (url: string) => fetch(url).then(r => r.json()),
    { suspense: true }
  );

  return (
    <div className="dispaly">
      {!!data && <img src={data.url} alt="picture" />}
    </div>
  );
};

export default Display;
