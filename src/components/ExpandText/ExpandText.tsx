import { useState } from "react";

interface ExpandTextProps {
  children: string;
  maxChars?: number;
}

function ExpandText({ children, maxChars = 100 }: ExpandTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}
      {isExpanded ? "" : "..."}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
}

export default ExpandText;
