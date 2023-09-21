import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../../data";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
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
    zIndex: isDragging ? 1000 : "auto",
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
  const [searchItem, setSearchItem] = useState("");

  const location = useLocation();

  // Search items implementation
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("q");
    setSearchItem(searchQuery || "");
  }, [location.search]);

  const filteredItems = items.filter((item) =>
    item.tag.toLowerCase().includes(searchItem.toLowerCase())
  );

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
            {filteredItems?.map((item) => (
              <SortableItem key={item.tag} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Home;
