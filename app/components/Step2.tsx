import { Dispatch, SetStateAction } from "react";

type Props = {
  values: Record<string, number>;
  selectedValues: string[];
  setSelectedValues: Dispatch<SetStateAction<string[]>>;
  setTopValues: Dispatch<SetStateAction<string[]>>;
  onNext: () => void;
  onPrev: () => void;
};

function Step2({
  values,
  selectedValues,
  setSelectedValues,
  setTopValues,
  onNext,
  onPrev,
}: Props) {
  const threePointValues = Object.entries(values).filter(
    ([, value]) => value === 3
  );

  const handleSelect = (key: string) => {
    if (selectedValues.includes(key)) {
      setSelectedValues(selectedValues.filter((v) => v !== key));
    } else if (selectedValues.length < 10) {
      setSelectedValues([...selectedValues, key]);
    }
  };

  const handleSubmit = () => {
    if (selectedValues.length <= 10) {
      setTopValues(selectedValues);
      onNext();
    } else {
      alert("10個の価値観を選んでください");
    }
  };

  return (
    <div>
      <h2>ステップ2: 3点をつけた価値観を10個に絞る</h2>
      <ul>
        {threePointValues.map(([key]) => (
          <li key={key}>
            <label>
              <input
                type="checkbox"
                checked={selectedValues.includes(key)}
                onChange={() => handleSelect(key)}
              />
              {key}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={onPrev}>戻る</button>
      <button onClick={handleSubmit}>次へ</button>
    </div>
  );
}

export default Step2;
