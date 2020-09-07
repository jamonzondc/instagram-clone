import { Post } from "./post.model";


class PostDAO {

    public async save(): Promise<Post> {
        return '';
    }
    public async findAll(): Promise<Post | null> {
        return null;
    }
}
export const postDAO: PostDAO = new PostDAO();