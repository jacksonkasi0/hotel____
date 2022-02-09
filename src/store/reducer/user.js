const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };

    case "DELETE_USER":
      const tempUsers = state.users.filter((_, index) => {
        return index !== action.payload;
      });
      return {
        users: [...tempUsers],
      };

    case "EDIT_USER":
      // const roomIndex = state.users.findIndex((room) => room.id !== action.data.id); // find room index
      let updatedUserData = [...state.users]; // makiung a new array
      updatedUserData[action.index] = action.payload; // changing data in the new array for that particular booked room
      console.log("main data = "+ updatedUserData)
      return {
        ...state,
        users: updatedUserData,
      };

    default:
      return state;
  }
};

export default userReducer;
