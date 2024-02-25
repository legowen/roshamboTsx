import React from "react";
// Types
import { Item } from "../types/item";

interface Props {
  item: Item;

  userPlayStart(userChoice: string): void;
}

const Button = (props: Props) => {
  return (
    <div className="buttonList">
      <button onClick={() => props.userPlayStart("Rock")}>
        <img
          src={props.item["Rock"].src}
          alt={props.item["Rock"].alt}
        />
      </button>
      <button onClick={() => props.userPlayStart("Scissors")}>
        <img
          src={props.item["Scissors"].src}
          alt={props.item["Scissors"].alt}
        />
      </button>
      <button onClick={() => props.userPlayStart("Paper")}>
        <img
          src={props.item["Paper"].src}
          alt={props.item["Paper"].alt}
        />
      </button>
    </div>
  );
};

export default Button;