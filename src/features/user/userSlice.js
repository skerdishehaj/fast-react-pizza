import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// We use createAsyncThunk to handle the asynchronous fetching of the user's address
// This is an action creator that returns a thunk
// When using createAsyncThunk, we need to define 3 action types:
// 1) The pending action type, which will be dispatched when the action creator is called
// 2) The fulfilled action type, which will be dispatched when the promise is resolved
// 3) The rejected action type, which will be dispatched when the promise is rejected
// ! Don't name async thunks with get, because it will be confused with selector methods

export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  // This object will be the payload of the fulfilled action type
  return { position, address };
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    status: 'idle',
    address: '',
    position: {},
    error: '',
  },
  reducers: {
    updateUsername(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    // 4) Then we handle the fulfilled action type, and we update the state with the data that we got from the API

    builder.addCase(fetchAddress.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchAddress.rejected, (state, action) => {
      state.status = 'error';
      state.error =
        'There was a problem getting your address. Make sure to fill this field!';
    });

    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.address = action.payload.address;
      state.position = action.payload.position;
      state.status = 'idle';
    });
  },
});

export const { updateUsername } = userSlice.actions;

export default userSlice.reducer;
export const getUsername = (state) => state.user.username;
export const getUser = (state) => state.user;
