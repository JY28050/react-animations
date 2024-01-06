import Badge from "./Badge.jsx";
import { motion } from "framer-motion";

function Tab({ isSelected, onSelect, badgeCaption, children }) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      </button>
      {isSelected && (
        <motion.div layoutId="tab-indicator" className="active-tab-indicator" />
      )}
    </li>
  );
}
//every tab gets it's own underline bar if it's tab is selected. It's three DOM elements. Framer motion will detect when you're rendering another element with the same layoutId in a different place of your page, and automatically smoothly animate. Now when we switch between tabs, the bar underlining it goes smoothly.

export default function ChallengeTabs({
  selectedType,
  onSelectType,
  challenges,
  children,
}) {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedType === "active"}
          onSelect={() => onSelectType("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === "completed"}
          onSelect={() => onSelectType("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === "failed"}
          onSelect={() => onSelectType("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
