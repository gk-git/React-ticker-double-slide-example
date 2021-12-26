import './App.css';
import NewsSlider from './NewsSlider';

const news = [
  {
    id: 1,
    name: 'How To Use React Ticker To Create a Double Sliding News Bar',
    date: '26 Dec, 2021',
    content: 'Showing news in flash or the latest post sliding style, then news ticker is a good option for your website.  On a previous project, I needed to show two tickers that move simultaneously, where the first ticker is for the author of the news and the…'
  },
  {
    id: 2,
    name: 'Five new CSS Tips that I have learned',
    date: '23rd December 2021',
    content: 'In the last two days, I read the Debugging CSS book by Ahmad Shadeed, reached the 4th chapter, and learned the following six new tips. List Media Queries You can view a page according to the media queries defined in the CSS in the Chrome browser…'
  },
  {
    id: 3,
    name: 'How I Would Explain WordPress To A 5 Years Old Kid',
    date: '23rd December 2021',
    content: `Let's say that you say that you are an expert in your field. Can you explain to others who don't know what you do? The best way to answer that question is to explain it to a five-year-old kid. I think that the best way to answer that question is to…`
  }
];
function App() {
  return (
    <div className="App">
      <NewsSlider news={news} />
    </div>
  );
}

export default App;
