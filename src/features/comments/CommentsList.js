import {Col} from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './CommentsSlice';

const CommentsList = ({ campsiteId }) => {
  const comments = selectCommentsByCampsiteId(campsite);
};

export default CommentsList;