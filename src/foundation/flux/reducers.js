import { combineReducers } from 'redux';

import { errorReducer } from '../../domains/error/error_reducer';
import { entryReducer } from '../../domains/entry/entry_reducer';
import { commentListReducer } from '../../domains/comment_list/comment_list_reducer';

export function createReducer(asyncReducer) {
  return combineReducers({
    error: errorReducer,
    entry: entryReducer,
    commentList: commentListReducer,
    ...asyncReducer,
  });
}
