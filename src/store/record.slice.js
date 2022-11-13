import { createSlice } from "@reduxjs/toolkit";
import { getRecords, insertRecord, deleteRecordDb } from "../db";
import Record from "../model/Record";
import {URL_GEOCODING} from '../utils/maps'

const initialState = {
  records: [],
};

const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    addRecord: (state, action) => {
      const newRecord = new Record(
        action.payload.id,
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords,
        action.payload.date,
        action.payload.category,
        action.payload.time,
        action.payload.user_id,
      );
      state.records.push(newRecord);
    },
    setRecords: (state, action) => {
      state.records = action.payload;
    },
    deleteRecord: (state, action) => {
      state.records = action.payload;
    },
  },
});

export const { addRecord, setRecords, deleteRecord } = recordSlice.actions;

export const saveRecord = (title, image, coords, date, category, time, user_id) => {
  return async (dispatch) => {
    const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng))

    if(!response.ok) throw new Error('failed1')

    const data = await response.json();

    if(!data.results) throw new Error ('failed2');

    const address = data.results[0].formatted_address

    try {
      const result = await insertRecord(title, image, address, coords, date, category, time, user_id);
      dispatch(addRecord({ id: result.insertId, title, image, address, coords, date, category, time, user_id }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};


export const loadRecords = (user_id) => {
  return async (dispatch) => {
    try {
      const result = await getRecords(user_id);
      dispatch(setRecords(result?.rows?._array));
    } catch (err) {
      throw err;
    }
  };
};


export const removeRecordDb = (id) =>{
  return async (dispatch) => {
    try {
      const result = await deleteRecordDb(id);
      dispatch(deleteRecord(id));
    } catch (err) {
      throw err;
    }
  }
};



export default recordSlice.reducer;