import React, { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        {tags.map((tag, index) => (
          <div className="item" key={index}>
            <span className="text">{tag}</span>
            <span className="close" onClick={() => removeTag(index)}>
              &times;
            </span>
          </div>
        ))}
        <input
          className="text-input"
          type="text"
          placeholder="type a tag"
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default Tags;
