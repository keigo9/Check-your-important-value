import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Step1 from "~/components/Step1";
import Step2 from "~/components/Step2";
import Step3 from "~/components/Step3";
import Step4 from "~/components/Step4";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({});
  const [topValues, setTopValues] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [rankedValues, setRankedValues] = useState<string[]>([]);

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);
  const handleRestart = () => {
    setStep(1);
    setValues({});
    setTopValues([]);
    setSelectedValues([]);
    setRankedValues([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-1">
      <div className="bg-white shadow-md rounded-lg max-w-xl w-full min-h-screen p-3">
        {step === 1 && (
          <Step1
            values={values}
            setValues={setValues}
            onNext={handleNextStep}
          />
        )}
        {step === 2 && (
          <Step2
            values={values}
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
            setTopValues={setTopValues}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        )}
        {step === 3 && (
          <Step3
            topValues={topValues}
            rankedValues={rankedValues}
            setRankedValues={setRankedValues}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        )}
        {step === 4 && (
          <Step4
            rankedValues={rankedValues}
            onRestart={handleRestart}
            onPrev={handlePrevStep}
          />
        )}
      </div>
    </div>
  );
}
