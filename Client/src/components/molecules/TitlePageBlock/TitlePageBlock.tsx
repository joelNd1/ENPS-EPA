import React, { ReactNode } from "react";

export type TitlePageBlockProps = {
    image: ReactNode
    title: string; 
    description: String,
    testId:string,
  };

  export function TitlePageBlock({
    image,
    title,
    description = '', // Default value for description if not provided
    testId,
  }: TitlePageBlockProps) {
    return (
      <div data-testid={testId}> {/* Assign testId to the div */}
        {image}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }