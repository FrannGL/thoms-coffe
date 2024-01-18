import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("session.db");

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS session (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT)",
				[],
				() => {
					resolve();
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const getSession = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				"SELECT * FROM session",
				[],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const insertSession = ({ localId, email, idToken }) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				"INSERT INTO session (localId, email, idToken) VALUES (?, ?, ?)",
				[localId, email, idToken],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const deleteSessions = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction(tx => {
			tx.executeSql(
				"DELETE FROM session",
				[],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};
