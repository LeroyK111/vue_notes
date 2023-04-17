// 这里我们使用jsx语法，构建函数式组件
import { withModifiers, defineComponent } from "vue";

// 函数式组件

const Func = () => {
  const count = ["1", "2"];

  return (
    <div>
      {count.map((value, index) => (
        <li id={index}>{value}</li>
      ))}
    </div>
  );
};

export default Func;
