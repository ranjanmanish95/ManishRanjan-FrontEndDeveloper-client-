import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllLaunchData = createAsyncThunk('launch/getData/All', async (arg,{
  rejectWithValue
})=>{
  try{
  const {data} = await axios.get('http://localhost:8001/launch/all');
  return data;
  } catch(error){
    rejectWithValue(error.response.data);
  }
})

 const allLaunchesSlice = createSlice({
  name: 'All Launch',
  initialState: { 
    allLaunches: [], 
    isSuccess: false,
    message: '',
    loading: false
  },
   reducers: {},
   extraReducers:{
    [getAllLaunchData.pending]: (state, {payload}) =>{
      state.loading = true;
    },
    [getAllLaunchData.fulfilled]: (state, {payload}) =>{
      state.loading = true;
      state.allLaunches = payload;
      state.isSuccess = true;
    },
    [getAllLaunchData.pending]: (state, {payload}) =>{
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    }
   }
  },
);
export default allLaunchesSlice;

export const getUpcomingLaunchData = createAsyncThunk('launch/getData/Upcoming', async (arg,{
  rejectWithValue
})=>{
  try{
  const {data} = await axios.get('http://localhost:8001/launch/upcoming');
  return data;
  } catch(error){
    rejectWithValue(error.response.data);
  }
})

export const upcomingLaunchesSlice = createSlice({
  name: 'Upcoming Launch',
  initialState: { 
    upcomingLaunches: [], 
    isSuccess: false,
    message: '',
    loading: false
  },
   reducers: {},
   extraReducers:{
    [getUpcomingLaunchData.pending]: (state, {payload}) =>{
      state.loading = true;
    },
    [getUpcomingLaunchData.fulfilled]: (state, {payload}) =>{
      state.loading = true;
      state.upcomingLaunches = payload;
      state.isSuccess = true;
    },
    [getUpcomingLaunchData.pending]: (state, {payload}) =>{
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    }
   }
  },
);

export const getSucccessfullLaunchData = createAsyncThunk('launch/getData/Successful', async (arg,{
  rejectWithValue
})=>{
  try{
  const {data} = await axios.get('http://localhost:8001/launch/successfull');
  return data;
  } catch(error){
    rejectWithValue(error.response.data);
  }
})


export const successfullLaunchesSlice = createSlice({
  name: 'Successfull Launch',
  initialState: { 
    successfullLaunches: [], 
    isSuccess: false,
    message: '',
    loading: false
  },
   reducers: {},
   extraReducers:{
    [getSucccessfullLaunchData.pending]: (state, {payload}) =>{
      state.loading = true;
    },
    [getSucccessfullLaunchData.fulfilled]: (state, {payload}) =>{
      state.loading = true;
      state.successfullLaunches = payload;
      state.isSuccess = true;
    },
    [getSucccessfullLaunchData.pending]: (state, {payload}) =>{
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    }
   }
  },
);

export const getFailedLaunchData = createAsyncThunk('launch/getData/Failed', async (arg,{
  rejectWithValue
})=>{
  try{
  const {data} = await axios.get('http://localhost:8001/launch/failed');
  return data;
  } catch(error){
    rejectWithValue(error.response.data);
  }
})

export const failedLaunchesSlice = createSlice({
  name: 'Failed Launch',
  initialState: { 
    failedLaunches: [], 
    isSuccess: false,
    message: '',
    loading: false
  },
   reducers: {},
   extraReducers:{
    [getFailedLaunchData.pending]: (state, {payload}) =>{
      state.loading = true;
    },
    [getFailedLaunchData.fulfilled]: (state, {payload}) =>{
      state.loading = true;
      state.failedLaunches = payload;
      state.isSuccess = true;
    },
    [getFailedLaunchData.pending]: (state, {payload}) =>{
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    }
   }
  },
);





