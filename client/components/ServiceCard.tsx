import React, { FC } from "react";
import { Service } from "../type";

const ServiceCard: FC<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-3 space-x-4 text-white bg-gray-800 rounded-md">
      <Icon className="w-12 h-12" />
      <div className="mb-2">
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
