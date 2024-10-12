import React, { ReactNode } from "react";

export type TitleBlockProps = {
    image: ReactNode
    title: string; 
    description: String,
    testId:string,
  };

  export function TitleBlock({
    image,
    title,
    description = '', // Default value for description if not provided
    testId,
  }: TitleBlockProps) {
    return (
      <div data-testid={testId}> {/* Assign testId to the div */}
        {image}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }