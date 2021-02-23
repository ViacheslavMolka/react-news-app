const initialState = {
    news: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEWS_LOADED':
            if (state.news) {
                return {
                    news: state.news
                }
            }
            return {
                news: action.payload
            };

        case 'NEWS_ADD':
            console.log('123', action.payload)
            const newArr = [action.payload, ...state.news];
            return {
                news: newArr
            };

        case 'NEWS_CHANGED':
            const changedElem = action.update;
            const id = parseInt(action.id - 1);
            let newItem;
            if(action.data) {
                newItem = [
                    ...action.data.slice(0, id),
                    {...action.data[id], ...changedElem},
                    ...action.data.slice(id + 1)
                ];
            } 
            return {
                news: newItem
            };

        default: 
            return state;
    }   
};

export default reducer;