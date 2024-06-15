import { valueList } from "~/const/ValueList";

type Props = {
  rankedValues: string[];
  onRestart: () => void;
  onPrev: () => void;
};
function Step4({ rankedValues, onRestart, onPrev }: Props) {
  return (
    <div>
      <h2>最終結果</h2>
      <ol>
        {rankedValues.map((value, index) => (
          <li key={value}>
            <strong>{index + 1}位:</strong> {value} - {valueList[value]}
          </li>
        ))}
      </ol>
      <button onClick={onPrev}>戻る</button>
      <button onClick={onRestart}>最初からやり直す</button>
    </div>
  );
}

export default Step4;
