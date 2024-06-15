import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type Props = {
  topValues: string[];
  setRankedValues: (values: string[]) => void;
  onNext: () => void;
  onPrev: () => void;
};

function Step3({ topValues, setRankedValues, onNext, onPrev }: Props) {
  const [rankedValues, setLocalRankedValues] = useState(topValues);

  const handleDragEnd = (result: any) => {
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
      <h2>ステップ3: 10個に絞った価値観に1～10位に並び替える</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="values">
          {(provided: any) => (
            <ol {...provided.droppableProps} ref={provided.innerRef}>
              {rankedValues.map((value, index) => (
                <Draggable key={value} draggableId={value} index={index}>
                  {(provided: any) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {value}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={onPrev}>戻る</button>
      <button onClick={handleSubmit}>次へ</button>
    </div>
  );
}

export default Step3;
