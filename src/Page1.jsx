import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(10).keys()];
  const history = useHistory();
  //もうひとつの方法
  const onClickDetailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>detailA</Link>
      <br />
      <Link to="/page1/detailB">detailB</Link>
      <br />
      <button onClick={onClickDetailA}>detailA</button>
    </div>
  );
};
