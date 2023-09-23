import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../../data";
import { closestCenter, DndContext, useDraggable } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./style.css";

// SortableItem Component
const SortableItem = ({ item }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.tag });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    zIndex: isDragging ? 10000 : "auto",
  };

  return (
    <figure ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <figcaption>{item.tag}</figcaption>
      <img src={item.imgUrl} alt={item.tag} />
    </figure>
  );
};

// Home Component
const Home = () => {
  const [items, setItems] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();

  // Search items implementation
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQueryFromUrl = params.get("q");
    setSearchQuery(searchQueryFromUrl || "");
  }, [location.search, searchQuery]);

  const filteredItems = items.filter((item) =>
    item.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItems = () => {
    if (filteredItems.length === 0) {
      return <p className="not-found">Search Item not found</p>;
    }

    return filteredItems.map((item) => (
      <SortableItem key={item.tag} item={item} />
    ));
  };

  const allItems = items.map((item) => (
    <SortableItem key={item.tag} item={item} />
  ));

  // onDragEnd handler
  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setItems((items) => {
      const oldIndex = items.findIndex((item) => item.tag === active.id);
      const newIndex = items.findIndex((item) => item.tag === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <div className="home">
      <h1>Legend's Card</h1>
      <div className="home__cardbox">
        <DndContext
          collisionDetection={closestCenter}
          onDragStart={() => {}}
          onDragEnd={onDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {searchQuery ? renderItems() : allItems}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Home;
