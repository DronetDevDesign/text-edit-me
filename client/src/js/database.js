import { openDB } from 'idb';

const initdb = async () =>
  openDB('text_edit_me', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('text edit me')) {
        console.log('text edit me database already exists');
        return;
      }
      db.createObjectStore('text edit me', { keyPath: 'id', autoIncrement: true });
      console.log('text edit me database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
