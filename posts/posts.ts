const src : string = './md';

const posts = [
  {
    title: "Hello world!",
    slug: "hello-world",
    content: require(`${src}/hello-world.md`).default,
    date: "2 September 2022",
  }
];

export default posts;
