import React from 'react';
import {getTagSolidStyle} from "../tagColors.js";

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-2 mb-3 overflow-hidden">
    {tags.map((tag) => (
      <span
        key={tag}
        style={getTagSolidStyle(tag)}
        className="inline-flex h-6 px-3 rounded-full text-xs capitalize whitespace-nowrap"
      >
        {tag}
      </span>
    ))}
  </div>
)

export default TagList;