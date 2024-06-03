import { LibraryItem } from "../model/library.model";

const fakeData: LibraryItem[] = [
  { id: "1", name: "item 1" },
  { id: "2", name: "item 2" },
];

class LibraryController {
  private generateId() {
    return (Math.random() * 1000).toString();
  }

  getItem(id: string) {
    return fakeData.find((item) => item.id === id);
  }

  getItems() {
    return fakeData;
  }

  addItem(item: { name: string }) {
    const newItem: LibraryItem = {
      id: this.generateId(),
      name: item.name,
    };

    fakeData.push(newItem);

    return newItem;
  }

  updateItem(id: string, item: LibraryItem) {
    const index = fakeData.findIndex((item) => item.id === id);
    fakeData[index] = item;
  }

  deleteItem(id: string) {
    const index = fakeData.findIndex((item) => item.id === id);
    fakeData.splice(index, 1);
  }
}

export const libraryController = new LibraryController();
