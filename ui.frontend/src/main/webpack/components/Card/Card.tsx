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
    <article className={`cmp-card bg-primary  transition-all-1 ${theme} ${variant}`}>
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
            <h2 className="cmp-card__name typo-secondary typo-color-primary transition-all-1">
              {name}
            </h2>
            <p className="cmp-card__roles typo-secondary typo-color-primary transition-all-1">
              {roles?.join(", ")}
            </p>
            {rating && (
              <p className="cmp-card__rating typo-secondary typo-color-secondary transition-all-1 bg-secondary">
                {rating}
              </p>
            )}
          </div>
          <div className="cmp-card__description">
            {description?.map((item, index) => (
              <p key={index} className="typo-secondary typo-color-primary transition-all-1">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
