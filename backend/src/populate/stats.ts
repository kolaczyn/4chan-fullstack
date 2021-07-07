import Stats from '../models/stats.model';

export default async () => {
  const stats = new Stats({
    totalPosts: 10,
    currentUsers: 10,
    activeContent: '10MB',
  });
  const result = await stats.save();
  // eslint-disable-next-line no-console
  console.log(result);
};
