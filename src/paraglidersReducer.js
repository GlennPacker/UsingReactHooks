const paraglidersReducer = (state, action) => {
  const updateFavorite = isFav => {
    return state.map(item => {
      if (item.id === action.sessionId) {
        item.favorite = isFav;
        return item;
      }
      return item;
    });
  };
  switch (action.type) {
    case "setParaglidersList":
      return action.data;
    case "favorite":
      return updateFavorite(true);
    case "unfavorite":
      return updateFavorite(false);
    default:
      return state;
  }
};

export default paraglidersReducer;
