import { valueList } from "~/const/ValueList";
import { ScrollToTop } from "~/utils/Scroll";

type Props = {
  values: Record<string, number>;
  setValues: (values: Record<string, number>) => void;
  onNext: () => void;
};

function Step1({ values, setValues, onNext }: Props) {
  ScrollToTop();
  const handleChange = (key: string, value: number) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        ニューメキシコ大学が公表した80の価値観リストを使って、自分に大切な価値観を明確にしてみましょう
      </h1>
      <h2 className="text-lg font-semibold mb-4">
        ステップ1: 価値観に1～3点をつける
      </h2>
      <ul className="space-y-3">
        {Object.entries(valueList).map(([key, desc]) => (
          <li key={key} className="flex flex-col justify-between items-center">
            <div className="flex-1">
              <span className="font-medium">{key}:</span> {desc}
            </div>
            <select
              value={values[key] || ""}
              onChange={(e) => handleChange(key, Number(e.target.value))}
              className={`ml-4 p-2 border border-gray-300 rounded-md font-medium ${
                values[key] === 0 ? "bg-gray-500" : ""
              }`}
            >
              <option value={""} hidden disabled>
                選択してください
              </option>
              <option value={1}>1点（重要じゃない）</option>
              <option value={2}>2点（重要）</option>
              <option value={3}>3点（非常に重要）</option>
            </select>
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          次へ
        </button>
      </div>
    </div>
  );
}

export default Step1;
