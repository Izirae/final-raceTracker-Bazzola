import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("records.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL, date TEXT NOT NULL, category TEXT NOT NULL, time TEXT NOT NULL, user_id TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const insertRecord = (title, image, address, coords, date, category, time, user_id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO records (title, image, address, coords, date, category, time, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
        [title, image, address, JSON.stringify(coords), date, category, time, user_id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const getRecords = (user_id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM records where user_id = ?",
        [user_id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const deleteRecordDb = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM records WHERE id = ?;",
        [id],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });

  return promise;
};