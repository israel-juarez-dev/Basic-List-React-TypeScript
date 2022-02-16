import { Child } from "./Child";


const Parent = () => <Child color={"red"} onClick={() => console.log('Clicked')}  />;

export default Parent;


