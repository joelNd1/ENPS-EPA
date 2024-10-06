// import React, { ReactNode } from "react";

// export type QuestionBlockProps = {
//     image: ReactNode
//     title: string; // The question text to display
//     options?: string[]; // Array of options for the multiple-choice question
//     PrimaryButton:string;
//     SecondaryButton?:string;
//     testId:string,
//   };

// export function QuestionBlock({
//   question,
//   questionType,
//   options = [], 
//   minSliderValue ,
//   maxSliderValue , 
//   answer,
//   onAnswerChange,
// }: QuestionBlockProps) {
//   return (
//     <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ccc' }}>
//       <h3>{question}</h3>

//       {/* Render input based on the question type */}
//       {questionType === 'Multiple Choice' && (
//         <div>
//           {options.map((option, index) => (
//             <div key={index} style={{ marginBottom: '10px' }}>
//               <label>
//                 <input
//                   type="radio"
//                   name="multiple-choice"
//                   value={option}
//                   checked={answer === option}
//                   onChange={(e) => onAnswerChange(e.target.value)}
//                 />
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       )}

//       {questionType === 'Slider' && (
//         <div>
//           <input
//             type="range"
//             min={minSliderValue}
//             max={maxSliderValue}
//             value={answer as number}
//             onChange={(e) => onAnswerChange(Number(e.target.value))}
//           />
//           <span>{answer}</span>
//         </div>
//       )}
//     </div>
//   );
// }
