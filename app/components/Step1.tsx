import { valueList } from "~/const/ValueList";

type Props = {
  values: Record<string, number>;
  setValues: (values: Record<string, number>) => void;
  onNext: () => void;
};

function Step1({ values, setValues, onNext }: Props) {
  const handleChange = (key: string, value: number) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <div>
      <h2>ステップ1: 価値観に1～3点をつける</h2>
      <ul>
        {Object.entries(valueList).map(([key, desc]) => (
          <li key={key}>
            {key}: {desc}
            <select
              value={values[key] || 1}
              onChange={(e) => handleChange(key, Number(e.target.value))}
            >
              <option value={1}>1点（重要じゃない）</option>
              <option value={2}>2点（重要）</option>
              <option value={3}>3点（非常に重要）</option>
            </select>
          </li>
        ))}
      </ul>
      <button onClick={onNext}>次へ</button>
    </div>
  );
}

export default Step1;
