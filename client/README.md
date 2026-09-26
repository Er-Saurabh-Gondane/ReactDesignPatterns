# React Design Patterns

A learning project focused on understanding and implementing common **React Design Patterns** using reusable components, props, destructuring, and component composition.

This project is part of my React learning journey and currently covers the **Split Screen Pattern** and **Regular List Pattern**.

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

#### Implementation

```jsx
export const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Left />
      </div>

      <div className="flex-[4]">
        <Right />
      </div>
    </div>
  );
};
```

### Key Concepts

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

Another component can display the same data differently:

```jsx
<RegularList
  items={people}
  resourceName="person"
  itemComponent={SmallPerson}
/>
```

The same pattern can also be used with products:

```jsx
<RegularList
  items={products}
  resourceName="product"
  itemComponent={ProductComponent}
/>
```

### Key Concepts

* Reusable components
* Component composition
* Dynamic component rendering
* Props
* Object destructuring
* Array `.map()`
* Dynamic prop names

---

## 🧠 React Concepts Practiced

Through this project, I am practicing:

* Functional Components
* Props
* Component Composition
* Destructuring
* Array `.map()`
* Dynamic Props
* Passing Components as Props
* Named Exports
* Reusable Components
* React Design Patterns
* Tailwind CSS

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
├── App.css
└── index.css
```

> Folder organization may be improved as the project grows and more React patterns are added.

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

The application will be available on the local development server provided by Vite.

---

## 📌 Learning Progress

| Design Pattern            | Status         |
| ------------------------- | -------------- |
| Split Screen Pattern      | ✅ Completed    |
| Regular List Pattern      | ✅ Completed    |
| Additional React Patterns | 🔄 In Progress |

---

## 🎯 Learning Goals

The main goal of this project is to understand how React can be used to build **reusable, flexible, and maintainable components**.

I am focusing on understanding the concepts behind each pattern rather than simply copying implementations.

Future learning areas include:

* Container & Presentational Pattern
* Controlled & Uncontrolled Components
* Compound Components
* Custom Hooks
* Higher-Order Components
* Provider Pattern
* State Reducer Pattern

---

## 👨‍💻 Author

**Saurabh Gondane**

M.Tech CSE | React | Java | Spring Boot | MERN Stack

---

## ⭐ Purpose

This repository is maintained as part of my **React learning journey** and is intended to document my progress in understanding React design patterns and reusable component architecture.
