import React from "react";

import "./styles/main.scss";

export interface CardProps {
  title: string;
  roles?: Array<string>;
  description?: Array<string>;
  image?: string;
  theme: "light" | "dark";
  variant: "horizontal" | "vertical";
}

export const Card = ({
  title,
  roles,
  description,
  image,
  theme = "light",
  variant = "vertical",
}: CardProps) => {
  return (
    <div className={`cmp-card ${theme} ${variant}`}>
      <div className="cmp-card__content">
        <div className="cmp-card__image-container">
          <div className="cmp-card__image-skeleton" />
          {image && <img src={image} alt={title} className="cmp-card__image" />}
        </div>
        <div className="cmp-card__inner">
          <div className="cmp-card__header">
            <h2 className="cmp-card__name typo-secondary typo-color-primary">{title}</h2>
            <p className="cmp-card__roles typo-secondary typo-color-primary">{roles?.join(", ")}</p>
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
