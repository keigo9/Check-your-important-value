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
  const [topValues, setTopValues] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [rankedValues, setRankedValues] = useState([]);

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
    <div className="font-sans p-4">
      <h1 className="text-lg">
        ニューメキシコ大学が公表した80の価値観リストを使って、自分に大切な価値観を明確にしてみましょう
      </h1>
      <div className="list-disc mt-4 pl-6 space-y-2">
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
