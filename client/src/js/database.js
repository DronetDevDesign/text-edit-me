import { openDB } from 'idb';

const initdb = async () =>
  openDB('text_edit_me_db', 1, {
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
export const putDb = async (content) => {
  console.log('PUT to the database');

  const textEditMeDb = await openDB('text_edit_me_db', 1);

  const tx = textEditMeDb.transaction('text_edit_me_db', 'readwrite');

  const store = tx.objectStore('text_edit_me_db');

  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const textEditMeDb = await openDB('text_edit_me_db', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = textEditMeDb.transaction('text_edit_me_db', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('text_edit_me_db');

  // Use the .getAll() method to get all data in the database.
  const request = store.get(1);

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result.value;
};

initdb();
