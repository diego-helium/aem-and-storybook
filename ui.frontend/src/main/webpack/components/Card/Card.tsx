import React from "react";

import "./main.scss";

export interface CardProps {
  name: string;
  roles?: Array<string>;
  description?: Array<string>;
  image?: string;
  theme: "light" | "dark";
  variant: "horizontal" | "vertical";
  rating?: number;
}

export const Card = ({
  name,
  roles,
  description,
  image,
  theme = "light",
  variant = "vertical",
  rating,
}: CardProps) => {
  return (
    <div className={`cmp-card ${theme} ${variant}`}>
      <div className="cmp-card__content">
        <div className="cmp-card__image-container">
          <div className="cmp-card__image-skeleton" />
          {image && (
            <div className="cmp-card__image">
              <div className="cmp-image">
                <img src={image} alt={name} className="cmp-image__image" />
              </div>
            </div>
          )}
        </div>
        <div className="cmp-card__inner">
          <div className="cmp-card__header">
            <h2 className="cmp-card__name typo-secondary typo-color-primary">{name}</h2>
            <p className="cmp-card__roles typo-secondary typo-color-primary">{roles?.join(", ")}</p>
            {rating && <p className="cmp-card__rating typo-secondary ">{rating}</p>}
          </div>
          <div className="cmp-card__description">
            {description?.map((item, index) => (
              <p key={index} className="typo-secondary typo-color-primary">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
