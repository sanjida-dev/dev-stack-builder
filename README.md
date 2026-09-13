# Dev Stack Builder

This is a simple React application where developers can select their favorite technologies and build a custom development stack.

## Features
* Clean and fully responsive UI.
* Add and remove items from the stack easily.
* Instant alert notifications using React-Toastify.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX stands for JavaScript XML. It allows us to write HTML code directly inside JavaScript in React. We use it because it makes writing and understanding the UI layout much easier.

### 2. What is the difference between props and state?
**Answer:** 
* **Props:** Props are used to pass data from a parent component to a child component. They are read-only and cannot be changed by the child component.
* **State:** State is the local memory of a component. It can change over time based on user action, and when it changes, the component re-renders.

### 3. What does the useState hook do, and where did you use it in this project?
**Answer:** The `useState` hook creates and updates a local state inside a functional component. In this project, I used it to keep track of the selected technologies in the sidebar stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook handles side effects like fetching data when the component loads. I needed it in this project to load the technology data from the local `techData.json` file when the website opens.

### 5. Why does every item in a .map() list need a unique key prop?
**Answer:** React needs a unique `key` for every item in a list to identify them individually. It helps React know exactly which item is added, removed, or changed, making the rendering performance much faster.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means showing different UI layouts based on a specific condition. In this project, I used it to show an empty state message when the stack is empty, and the list of selected items when the stack has data. Example:
`{selectedStack.length === 0 ? <EmptyMessage /> : <StackList />}`

### 7. How do you pass data from a parent component to a child component, and how does a child send something back?
**Answer:** 
* **Parent to Child:** A parent component passes data down to a child component using Props.
* **Child to Parent:** A child component cannot pass data directly. Instead, the parent sends a function as a prop, and the child calls that function to send data back to the parent.
