import React from "react";

export type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const Card: React.FC<CardProps> = (props) => {
  const { description, icon, title } = props;
  return (
    <>
      <div className="bg-muted rounded-lg px-3 py-6 text-center">
        <div className="flex justify-center mb-3">{icon}</div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </>
  );
};

export default Card;
