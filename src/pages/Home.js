import Post from '../components/Post';
import Card from '../components/Card';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    text: 'This is card 1',
    imgSrc: 'https://picsum.photos/300/200',
  },
  {
    id: 2,
    title: 'Card 2',
    text: 'This is card 2',
    imgSrc: 'https://picsum.photos/300/200',
  },
  {
    id: 3,
    title: 'Card 3',
    text: 'This is card 3',
    imgSrc: 'https://picsum.photos/300/200',
  },
  {
    id: 4,
    title: 'Card 4',
    text: 'This is card 4',
    imgSrc: 'https://picsum.photos/300/200',
  },
];

const Home = () => {
  return (
    <section className="section">
      <div className="section-center">
        <div className="title">
          <h1 className="page-title">Dashboard</h1>
          <div className="title-underline"></div>
        </div>

        {/* cards */}
        <div className="cards">
          <Post />
          <Card card={cards[0]} />
          <Post />
          <Card card={cards[1]} />
          <Card card={cards[2]} />
          <Post />
          <Card card={cards[3]} />
          <Post />
        </div>
      </div>
    </section>
  );
};

export default Home;
