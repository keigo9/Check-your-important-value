import { valueList } from "~/const/ValueList";

type Props = {
  rankedValues: string[];
  onRestart: () => void;
  onPrev: () => void;
};
function Step4({ rankedValues, onRestart, onPrev }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 mt-6">最終結果</h2>
      <ol>
        {rankedValues.map((value, index) => (
          <li key={value}>
            <strong>{index + 1}位:</strong> {value} - {valueList[value]}
          </li>
        ))}
      </ol>
      <div className="flex justify-end gap-3">
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onPrev}
        >
          戻る
        </button>
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onRestart}
        >
          最初からやり直す
        </button>
      </div>
    </div>
  );
}

export default Step4;
