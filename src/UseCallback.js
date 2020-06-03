import React, { memo, useState, useCallback } from "react";

// useCallback 优化针对于子组件渲染，防止传入子组件的引用不同导致子组件渲染
// useMemo 优化针对于当前组件高开销的计算
const ParentComponent = () => {
  const [count, setCount] = useState(1);
  const [updateChildrenComponentNum, setUpdateChildrenComponentNum] = useState(
    0
  );
  const handleChildren = updateChildrenComponentNum => {
    console.log(
      "clicked ChildrenComponent updateChildrenComponentNum " +
        updateChildrenComponentNum
    );
  };
  // 如果不使用下面的useCallback的话，每次点击 ParentComponent 都会导致 子组件渲染，因为每次传过去的 handleChildren 的引用是不一样的
  const handleChildrenCallback = useCallback(() => {
    handleChildren(updateChildrenComponentNum);
  }, [updateChildrenComponentNum]);

  const handleParent = () => {
    console.log("clicked ParentComponent");
    setCount(preCount => preCount + 1);
    //每点击三次就会触发ChildrenComponent渲染
    if (count % 3 === 0) setUpdateChildrenComponentNum(preNum => preNum + 1);
  };

  return (
    <div>
      <div onClick={handleParent}>ParentComponent --count =={count} </div>
      <ChildrenComponent handleChildren={handleChildrenCallback} />
    </div>
  );
};

const ChildrenComponent = memo(({ handleChildren }) => {
  console.log("ChildrenComponent rending");
  return <div onClick={handleChildren}>ChildrenComponent </div>;
});

export default ParentComponent;
