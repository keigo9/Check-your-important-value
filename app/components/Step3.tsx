import { Dispatch, SetStateAction, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided,
  DroppableProvided,
} from "react-beautiful-dnd";
import { valueList } from "~/const/ValueList";

type Props = {
  topValues: string[];
  setRankedValues: Dispatch<SetStateAction<string[]>>;
  onNext: () => void;
  onPrev: () => void;
};

function Step3({ topValues, setRankedValues, onNext, onPrev }: Props) {
  const [rankedValues, setLocalRankedValues] = useState(
    topValues.filter((v) => v !== "")
  );

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(rankedValues);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLocalRankedValues(items);
  };

  const handleSubmit = () => {
    setRankedValues(rankedValues);
    onNext();
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 mt-6">
        ステップ3: 10個に絞った価値観に1～10位に並び替える
      </h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="values">
          {(provided: DroppableProvided) => (
            <ol {...provided.droppableProps} ref={provided.innerRef}>
              {rankedValues.map((value, index) => (
                <Draggable key={value} draggableId={value} index={index}>
                  {(provided: DraggableProvided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="max-w-sm rounded overflow-hidden shadow-lg mt-1"
                    >
                      <div className="px-6 py-4 bg-gray-200 text-sm">
                        {value}:{" "}
                        <span className="text-xs">{valueList[value]}</span>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
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

export default Step3;
