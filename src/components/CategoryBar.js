import React from "react"

const Category = ({ category, handleClick, selected }) => {
  return (
    <span
      key={category}
      onClick={handleClick}
      style={{
        color: selected ? "var(--gold)" : "black",
        marginRight: "1rem",
        cursor: "pointer",
      }}
    >
      {category}.
    </span>
  )
}

export default ({ handleClick, selected, categories }) => (
  <h2 style={{ margin: "3rem 0rem" }}>
    {categories.map(category => (
      <Category
        category={category}
        handleClick={() => handleClick(category)}
        selected={selected === category ? true : false}
      />
    ))}
  </h2>
)
