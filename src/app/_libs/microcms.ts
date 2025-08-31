export type News = {
    id: string;
    title: string;
    category: Category;
    publishedAt: string;
    createdAt: string;
};

export type Category = {
    name: string;
};
