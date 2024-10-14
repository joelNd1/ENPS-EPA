import * as material from "@mui/material";

export type QuestionBlockProps = {
  question: string;
  questionType: "Multiple Choice" | "Slider";
  options?: string[];
  minSliderValue?: number;
  maxSliderValue?: number;
  answer: string | number;
  onAnswerChange: (answer: string | number) => void;
  testId: string;
};

// Define custom marks for the Slider
const marks = [
  {
    value: 1,
    label: 'Strongly Disagree',
  },
  {
    value: 2,
    label: 'Disagree',
  },
  {
    value: 3,
    label: 'Neutral',
  },
  {
    value: 4,
    label: 'Agree',
  },
  {
    value: 5,
    label: 'Strongly Agree',
  },
];

export default function QuestionBlock({
  question,
  questionType,
  options = [],
  minSliderValue = 1,
  maxSliderValue = 5,
  answer,
  onAnswerChange,
  testId,
}: QuestionBlockProps) {
  return (
    <material.Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {/* Question */}
      <material.Typography
        variant="h1"
        gutterBottom
        textAlign={"center"}
        sx={{ padding: "64px", fontFamily: "PublicoHeadline, sans-serif", fontSize: '36px' }}
      >
        {question}
      </material.Typography>

      {/* Render input based on the question type */}
      {questionType === "Multiple Choice" && (
        <material.RadioGroup value={answer} onChange={(e) => onAnswerChange(e.target.value)}>
          {options.map((option, index) => (
            <material.Box
              key={index}
              sx={{
                marginBottom: "10px",
                border: "1px solid #757575",
                borderRadius: "6px",
                padding: "24px",
                backgroundColor: '#ffffff',
              }}
            >
              <material.FormControlLabel
                value={option}
                control={<material.Radio />}
                label={option}
                labelPlacement="end"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontFamily: "Source Sans Pro, PublicoHeadline",
                    fontWeight: 'bold',
                    fontSize: '18px',
                  },
                }}
              />
            </material.Box>
          ))}
        </material.RadioGroup>
      )}

      {questionType === "Slider" && (
        <material.Box sx={{ marginTop: "20px" }}>
          <material.Slider
            value={answer as number}
            aria-label="Likert Scale"
            defaultValue={3}
            min={minSliderValue}
            max={maxSliderValue}
            marks={marks}
            onChange={(e, value) => onAnswerChange(value as number)}
            valueLabelDisplay="auto"
            sx={{
              width: "100%",
              color: "#343C3D",
              "& .MuiSlider-thumb": {
                backgroundColor: "#343C3D",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#343C3D",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#343C3D",
              },
            }}
          />
          <material.Typography
            variant="body2"
            sx={{ marginTop: "10px", fontFamily: "PublicoHeadline, sans-serif" }}
          >
            {answer}
          </material.Typography>
        </material.Box>
      )}
    </material.Box>
  );
}
