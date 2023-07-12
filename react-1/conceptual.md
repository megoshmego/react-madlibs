### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

- What is Babel?

compiler that allows for backward-compatible versions of javascript to run on older browsers or environements. b/c of that devs can use the latest features like arrow functions and modules, etc, even if the previous environment didn't support it natively. Babel transforms code during the compilation process, to make it compatible w the desired environment. 

- What is JSX?

Javascrypt XML. syntax extension to make it easy to write JS code that looks like HTML. used in React to describe the structure and appearance of UI stuff. makes it easier to define component's rendering logic. 

- How is a Component created in React?

by definining a JS function or class that returns a React Element of JSX. there are two componenets- Functional and class. can receive data and configuration w/ props and maintain their own state w/ useState or this.state  

- What are some difference between state and props?

state represents the internal data managed by a component. it's mutable and be updated within the component using 'setState' or 'useState' hook. shouldnt be modified outside of the component. primarily used to store and track data that may change over time.

props are passed to a component from parent component. read only and cannot be modified within the component. props are used to configure a component and provide data from the parent component to its children. they share data and behavior between components. 

- What does "downward data flow" refer to in React?

principle that suggests data should flow from parent components to children in an unidirectional manner. children do not modify data. 

- What is a controlled component?

form element whose value is controlled by React state. the vaue of the form element is bound to the state, and any changes are handled by updating the state. allows react to be the one controlling form data. 

- What is an uncontrolled component?

form element like input or select that stores its own state internally, indpendent of React state. value of the form element is managed by the DOM. not React

- What is the purpose of the `key` prop when rendering a list of components?

special attribute used when rendering a list of components in React. helps react each component uniquely and optimize the rendering process. needs a stable, unique value. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

because React relies on index order to identify and track components. its something is altered, react may incorrectly assume that components w different keys are the same, leading to unexpected behavior. 

may cause a list to re render

- Describe useEffect.  What use cases is it used for in React components?

built in hook that allows side effects in function components. replaces the functionality of the lifecycle methods in class components. is called after a components is rendered and every time it is re rendered. 

fetches data from an API, helps w subscribing events or timers, modifying the DOM, cleaning up resources. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

built in hook that returns a mutable ref object whose .current property can be used to persist a value across component renders. unlike state or props, changing the .current value of a ref does not cause a component to re-render. 

used to access DOM elements or hold **

- When would you use a ref? When wouldn't you use one?

- What is a custom hook in React? When would you want to write one?
