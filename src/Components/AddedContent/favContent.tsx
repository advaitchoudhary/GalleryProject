import React, { useState } from "react";
import "../../Styles/content.css";
import Item from "../Item";
import Sider from "../Sider";
import { useSelector, useDispatch } from "react-redux";
import { useGetImagesQuery } from "../../Services/operations.api";
import { Root } from "react-dom/client";
import { images } from "../../Models/images";
const FavContent = () => {
  const manuallyFav = useSelector((state: any) => state.favReducer.value);
  console.log(manuallyFav);
  // const manuallyFav = useSelector((state: any) => {
  //   state.favStore.value;
  // });
  // console.log(manuallyFav);
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetImagesQuery("");
  const [dElem, setDElem] = useState(isSuccess ? data[0] : {});
  return (
    <div style={{ display: "flex" }}>
      <div className="rowContent">
        {isSuccess && (
          <>
            {[...data, ...manuallyFav].map((elem: any, index: number) => {
              return (
                <>
                  {elem.favorited ? (
                    <Item elem={elem} setDElem={setDElem} id={elem.id} />
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </>
        )}
      </div>
      <Sider elem={dElem} />
    </div>
  );
};

export default FavContent;
