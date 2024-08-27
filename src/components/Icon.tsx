import React from "react";
import { getIcon } from "./GetIcon";
const Icon: React.FC<any> = ({ name = "", alt = "" }) => {
  return <img src={getIcon(name)} alt={alt} />;
};

export default Icon;
