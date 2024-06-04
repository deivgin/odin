import { LibraryItem } from '../model/library.model';

const fakeData: LibraryItem[] = [
  { id: '1', title: 'item 1' },
  { id: '2', title: 'item 2' },
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

  addItem(item: Partial<LibraryItem>) {
    const newItem: LibraryItem = {
      id: this.generateId(),
      title: item.title ?? '',
    };

    fakeData.push(newItem);

    return newItem;
  }

  updateItem(item: Partial<LibraryItem>) {
    const index = fakeData.findIndex((x) => x.id === item.id);

    const updatedItem = {
      ...fakeData[index],
      ...item,
    };

    fakeData[index] = updatedItem;

    return updatedItem;
  }

  deleteItem(id: string) {
    const index = fakeData.findIndex((item) => item.id === id);
    fakeData.splice(index, 1);
  }
}

export const libraryController = new LibraryController();
