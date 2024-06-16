import { Dispatch, SetStateAction } from "react";
import { valueList } from "~/const/ValueList";
import { ScrollToTop } from "~/utils/Scroll";

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
  ScrollToTop();
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
      <h2 className="text-lg font-semibold mb-4 mt-6">
        ステップ2: 3点をつけた価値観を10個以内に絞る
      </h2>
      <ul>
        {threePointValues.map(([key]) => (
          <li key={key} className="flex items-center">
            <label className="relative flex items-center p-1 rounded-full cursor-pointer text-md">
              <div className="relative h-5 mr-3">
                <input
                  type="checkbox"
                  checked={selectedValues.includes(key)}
                  onChange={() => handleSelect(key)}
                  className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
                  </svg>
                </span>
              </div>
              {key}: <span className="text-sm">{valueList[key]}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-right">
        {selectedValues.length > 0
          ? `選択した数: ${selectedValues.length}`
          : ""}
      </p>
      <div className="flex justify-end gap-3">
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onPrev}
        >
          戻る
        </button>
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          次へ
        </button>
      </div>
    </div>
  );
}

export default Step2;
