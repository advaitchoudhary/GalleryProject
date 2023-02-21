import React, { useState } from "react";
import hearts from "../../Assets/hearts.png";
import heartsRed from "../../Assets/heartRed.png";
import { setFavourites } from "../../Services/favStore.slice";
import { useSelector, useDispatch } from "react-redux";
import { isFav } from "../../utils/utils";
import "../../Styles/sider.css";
import { images } from "../../Models/images";
const Description = (field: string, fieldValue: string) => {
  return (
    <div className="description">
      <div>{field}</div>
      <div>{fieldValue}</div>
    </div>
  );
};
const checkFav = (arr: images[], id: string) => {
  //   arr.find((o:any, i:number) => {
  //     // if (o.id === id) {
  //     //     // arr[i] = { name: 'new string', value: 'this', other: 'that' };
  //     //     return true; // stop searching
  //     // }
  //     // return false
  // }

  // );
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      console.log(arr[i].id, id);
      return true;
    }
  }
  return false;
};
const Sider = ({ elem }: { elem: any }) => {
  const dispatch = useDispatch();
  const manuallyFav = useSelector((state: any) => state.favReducer.value);
  const [fav, setFav] = useState(false);
  const [idS, setIdS] = useState("");
  const Heading = (
    name: string,
    size: string,
    id: string,
    favorited: boolean
  ) => {
    // setFav(favorited);
    return (
      <>
        <div className="description">
          <div>{name}</div>
          {!favorited && !fav ? (
            <img
              onClick={() => {
                setFav(!fav);
                setIdS(elem.id);
                dispatch(setFavourites(elem));
              }}
              width={25}
              height={25}
              src={hearts}
              alt="favourite image"
            />
          ) : (
            <img
              onClick={() => {
                setFav(!fav);
                setIdS(elem.id);
              }}
              width={25}
              height={25}
              src={heartsRed}
              alt="favourite image"
            />
          )}
        </div>
      </>
    );
  };
  return (
    <>
      <div
        className="drawer"
        style={{ height: "100%", position: "absolute", right: "0px" }}
      >
        <img
          width={"330px"}
          height={"300px"}
          style={{ borderRadius: "10px" }}
          src={elem.url}
          alt={elem.filename}
        />
        <>{Heading(elem.filename, "32.6 mb", elem?.id, elem?.favorited)}</>
        <div style={{ fontSize: "22px" }}>Information</div>
        {Description("Uploaded By", elem.uploadedBy)}
        {Description("Created", elem.createdAt?.split("T")[0])}
        {Description("Last Modified", elem.updatedAt?.split("T")[0])}
        {Description(
          "Resolution",
          `${elem?.resolution?.height} x ${elem?.resolution?.width}`
        )}
        <div style={{ fontSize: "22px", marginTop: "30px" }}>Description</div>
        <div className="descr">
          "Consequatur sed accusantium facere quidem amet aspernatur sequi
          corporis distinctio. Quis delectus repellendus minus totam architecto
          delectus. Ea labore minima qui pariatur ipsa. Nulla repellendus ab
          blanditiis unde accusantium tempora ea."
        </div>
        {/* {elem?.description} */}
      </div>
    </>
  );
};
export default Sider;
