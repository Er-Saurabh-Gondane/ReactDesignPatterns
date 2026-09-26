# React Design Patterns

A learning project focused on understanding and implementing common **React Design Patterns** using reusable components, component composition, props, destructuring, and dynamic rendering.

This project is part of my React learning journey. The current implementation covers **Split Screen**, **Regular List**, and **Modal/Composition** patterns.

---

## 📚 Design Patterns Covered

### 1. Split Screen Pattern

The **Split Screen Pattern** is used to divide a page or section into multiple areas and render different components in each area.

#### Example

```jsx
<SplitScreen
  left={LeftHandComponent}
  right={RightHandComponent}
/>
```

The `SplitScreen` component receives components through props and renders them in separate sections.

#### Key Concepts

* Component composition
* Passing components as props
* Destructuring with renaming
* Reusable layouts
* Flexible UI structure

---

### 2. Regular List Pattern

The **Regular List Pattern** is used to create a reusable list component that can display different types of data using different item components.

Instead of creating separate list logic for every type of data, the same `RegularList` component can be reused.

#### Example

```jsx
<RegularList
  items={people}
  resourceName="person"
  itemComponent={LargePerson}
/>
```

The same list can use another component to display the data differently:

```jsx
<RegularList
  items={people}
  resourceName="person"
  itemComponent={SmallPerson}
/>
```

The pattern can also be reused with other data such as products:

```jsx
<RegularList
  items={products}
  resourceName="product"
  itemComponent={ProductComponent}
/>
```

#### Key Concepts

* Reusable components
* Component composition
* Dynamic component rendering
* Props
* Object destructuring
* Array `.map()`
* Dynamic prop names

---

### 3. Modal / Composition Pattern

The **Modal Pattern** is used to display content in an overlay on top of the current page.

In this implementation, the modal uses the React `children` prop to make the modal reusable. Any component or JSX content can be passed inside the `<Modal>` component.

#### Example

```jsx
<Modal>
  <LargePerson person={people[0]} />
</Modal>
```

The content passed between the opening and closing `<Modal>` tags becomes the `children` prop.

Inside the `Modal` component:

```jsx
export const Modal = ({ children }) => {
  // ...

  return (
    <div>
      {/* Modal UI */}

      {children}

      {/* Close button */}
    </div>
  );
};
```

This allows the same modal component to display different content without changing the modal implementation.

#### Key Concepts

* `children` prop
* Component composition
* Conditional rendering
* `useState`
* Event handling
* Event propagation
* Reusable UI components
* Modal overlay implementation

#### Modal Behavior

The modal follows this flow:

```text
Show Modal Button
        ↓
setShouldShow(true)
        ↓
Modal appears
        ↓
Render {children}
        ↓
Click outside → Close Modal
Click inside  → Keep Modal Open
        ↓
Hide Modal → setShouldShow(false)
```

The modal also uses:

```jsx
onClick={(e) => e.stopPropagation()}
```

to prevent clicks inside the modal from triggering the background overlay's click event.

---

## 🧠 React Concepts Practiced

Through this project, I am practicing:

* Functional Components
* Props
* `children` Props
* Component Composition
* Destructuring
* Array `.map()`
* Dynamic Props
* Passing Components as Props
* Named Exports
* Conditional Rendering
* `useState`
* Event Handling
* Event Propagation
* Reusable Components
* React Design Patterns

---

## 📁 Project Structure

The project is intentionally kept simple while learning. Components are currently placed directly inside the `src` folder.

```text
src/
├── App.jsx
├── main.jsx
├── SplitScreen.jsx
├── LargePerson.jsx
├── SmallPerson.jsx
├── RegularList.jsx
├── Modal.jsx
├── App.css
└── index.css
```

> The folder structure may be improved as the project grows and more React patterns are added.

---

## 🛠️ Technologies Used

* **React**
* **JavaScript (ES6+)**
* **Vite**
* **Tailwind CSS**
* **HTML5**
* **CSS3**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd <project-directory>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

---

## 📌 Learning Progress

| Design Pattern              | Status         |
| --------------------------- | -------------- |
| Split Screen Pattern        | ✅ Completed    |
| Regular List Pattern        | ✅ Completed    |
| Modal / Composition Pattern | ✅ Completed    |
| Additional React Patterns   | 🔄 In Progress |

---

## 🎯 Learning Goals

The main goal of this proje
