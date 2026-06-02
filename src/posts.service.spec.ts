import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
<<<<<<< HEAD
    const createdPost = postsService.create(post);

    expect(createdPost).toEqual(
      expect.objectContaining({
        id: '2',
        text: post.text,
      }),
    );
    expect(createdPost.date).toEqual(expect.any(String));
  });

  it('should find a post', () => {
    const foundPost = postsService.find('1');

    expect(foundPost).toBeDefined();
    expect(foundPost).toEqual(
      expect.objectContaining({
        id: '1',
        text: 'Some pre-existing post',
      }),
    );
=======
    // реализуйте тест-кейс
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
>>>>>>> b68aa418a28cd79cca2836f1f11771d95297c634
  });
});