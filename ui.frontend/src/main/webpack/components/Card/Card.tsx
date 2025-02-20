import React from "react";

import "./card.scss";

export interface CardProps {
  title: string;
  roles?: Array<string>;
  description?: Array<string>;
  image?: string;
  theme?: "light" | "dark";
}

export const Card = ({ title, roles, description, image, theme }: CardProps) => {
  return (
    <div className={`cmp-card ${theme}`}>
      <div className="cmp-card__content">
        <div className="cmp-card__image-container">
          <div className="cmp-card__image-skeleton" />
          {image && <img src={image} alt={title} className="cmp-card__image" />}
        </div>
        <div className="cmp-card__header">
          <h2 className="cmp-card__name">{title}</h2>
          <p className="cmp-card__roles">{roles?.join(", ")}</p>
        </div>
        <div className="cmp-card__description">
          {description?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
