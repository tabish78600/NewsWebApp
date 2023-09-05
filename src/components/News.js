import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    pageSize: 15,
    category: "genrel",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Heather Chen, Wayne Chang",
      title:
        "China protests after US jets shoot down suspected spy balloon - CNN",
      description:
        'China has expressed its "strong dissatisfaction and protest" against the United States\' decision to shoot down its high-altitude balloon, accusing it of "overreacting" and "seriously violating international practice."',
      url:
        "https://www.cnn.com/2023/02/04/asia/beijing-reacts-us-jets-shoot-chinese-spy-balloon-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230204150801-01-balloon-shot-down.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-05T05:49:00Z",
      content:
        "China has expressed its strong dissatisfaction and protest against the United States decision to shoot down its high-altitude balloon, accusing it of overreacting and seriously violating internationa… [+3696 chars]",
    },
    {
      source: {
        id: null,
        name: "Daily Beast",
      },
      author: "Matt Wilstein",
      title:
        "SNL Lands Exclusive Interview With the Chinese Spy Balloon - The Daily Beast",
      description:
        "‘Saturday Night Live’ cast member Bowen Yang took on the role and made the most of it.",
      url:
        "https://www.thedailybeast.com/snl-lands-exclusive-interview-with-the-chinese-spy-balloon",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1432,w_2546,x_14,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1675572621/SNL_uzffah",
      publishedAt: "2023-02-05T05:30:28Z",
      content:
        "Saturday Night Live opened this weeks show withwhat else?the Chinese spy balloon that the Biden administration successfully shot down earlier in the day. But unlike the rest of the obsessive media co… [+1080 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Pete Muntean",
      title:
        "Investigators probing a possible near-collision between two aircraft on an airport runway in Austin, Texas - CNN",
      description:
        "A FedEx cargo plane trying to land at an Austin, Texas, airport had to change course Saturday to avoid a potential collision with a Southwest Airlines jet that was taking off from the same runway, officials said.",
      url:
        "https://www.cnn.com/2023/02/05/business/austin-texas-airport-near-collision/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230204223721-01-austin-bergstrom-international-airport-032422-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-05T05:16:00Z",
      content:
        "A FedEx cargo plane trying to land at an Austin, Texas, airport had to change course Saturday to avoid a potential collision with a Southwest Airlines jet that was taking off from the same runway, of… [+1044 chars]",
    },
    {
      source: {
        id: null,
        name: "WABC-TV",
      },
      author: null,
      title:
        "Off-duty officer critical after being shot during attempted robbery in Brooklyn - WABC-TV",
      description:
        "The shooting took place Saturday at 7 p.m. on Ruby Street in East New York. The officer was attempting to purchase a car over a social media platform when he was shot.",
      url:
        "https://abc7ny.com/nyc-shooting-nypd-officer-shot-police-brooklyn/12771541/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/12771568_020423-police-officer-shot.png?w=1600",
      publishedAt: "2023-02-05T05:00:43Z",
      content:
        "EAST NEW YORK, Brooklyn (WABC) -- An off-duty NYPD officer is fighting for his life after being shot during an attempted robbery in Brooklyn, police say.\r\nThe shooting took place Saturday at 7 p.m. o… [+1119 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Heather Chen, Philip Wang",
      title:
        "Shark kills teenage girl who went for swim in Australian river - CNN",
      description:
        "A 16-year-old girl has been attacked and killed by a shark while swimming in a river in Perth, Western Australia, local authorities said.",
      url:
        "https://www.cnn.com/2023/02/04/asia/shark-attack-teenager-death-perth-swan-river-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230204202754-perth-shark-attack.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-05T04:58:00Z",
      content:
        "A 16-year-old girl has been attacked and killed by a shark while swimming in a river in Perth, Western Australia, local authorities said. \r\nThe teenager was pronounced dead after being pulled from Sw… [+1529 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "Chile wildfires kill at least 23 people as state of emergency extended further - The Guardian",
      description:
        "Interior minister says ‘emergency is getting worse’ as weather conditions complicate efforts to put out spreading fires",
      url:
        "https://www.theguardian.com/world/2023/feb/05/chile-wildfires-kill-at-least-23-people-as-state-of-emergency-extended-further",
      urlToImage:
        "https://i.guim.co.uk/img/media/424a1fb74d26614ff487d681f149f8ddc68afacc/0_296_5472_3283/master/5472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d203641db4d38cf89048f9fea9e1576c",
      publishedAt: "2023-02-05T04:06:00Z",
      content:
        "Dozens of wildfires in Chile have claimed at least 23 lives, forcing the government to extend an emergency order to another region as a scorching summer heatwave complicates efforts to control the bl… [+2307 chars]",
    },
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: "Dave McMenamin",
      title:
        "Would a Kyrie Irving deal give Lakers a lift? LeBron James answers, 'Duh' - ESPN",
      description:
        'LeBron James answered "duh" on Saturday when asked if Kyrie Irving -- whom he teamed up with for three NBA Finals appearances and a championship in Cleveland -- is the type of player who can stamp the Los Angeles Lakers\' title chances.',
      url:
        "https://www.espn.com/nba/story/_/id/35591994/would-kyrie-irving-deal-give-lakers-lift-lebron-james-answers-duh",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0126%2Fr1122834_1296x729_16%2D9.jpg",
      publishedAt: "2023-02-05T04:01:53Z",
      content:
        "NEW ORLEANS - With the trade deadline just five days away and Kyrie Irving having already informed the Brooklyn Nets he wants out, LeBron James was asked if Irving -- whom he teamed up with for three… [+4036 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Dabba-Kato attacks Apollo Crews at Vengeance Day: NXT Vengeance Day 2023 highlights - WWE",
      description:
        "The returning Dabba-Kato attacked his former ally Apollo Crews after the latter's grueling 2 out of 3 Falls Match against Carmelo Hayes. Catch WWE action on ...",
      url: "https://www.youtube.com/watch?v=K2GmU_6Kk2I",
      urlToImage: "https://i.ytimg.com/vi/K2GmU_6Kk2I/maxresdefault.jpg",
      publishedAt: "2023-02-05T03:45:02Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Mo Bamba, Austin Rivers, Jalen Suggs earn suspensions after Magic-Timberwolves brawl - CBS Sports",
      description:
        "Bamba, Rivers and Suggs were among five players ejected after a massive brawl during Friday's matchup",
      url:
        "https://www.cbssports.com/nba/news/mo-bamba-austin-rivers-jalen-suggs-earn-suspensions-after-magic-timberwolves-brawl/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/02/05/40483f1c-d587-42b4-afbe-5f806f140d55/thumbnail/1200x675/1248c946e6c07abb988a51d82ab77a17/gettyimages-1246775358-1.jpg",
      publishedAt: "2023-02-05T03:06:00Z",
      content:
        "Three players have been suspended following Friday's fight between the Orlando Magic and Minnesota Timberwolves, the NBA announced Saturday. Mo Bamba has been suspended four games and Austin Rivers h… [+3301 chars]",
    },
    {
      source: {
        id: null,
        name: "Wccftech",
      },
      author: "Hassan Mujtaba",
      title:
        "AMD Ryzen 7 7840HS “Phoenix” 8 Core CPU Benchmarks Show Up To 25% Faster Performance Versus Ryzen 7 6800H - Wccftech",
      description:
        "The first benchmarks of AMD's Ryzen 7 7840HS Phoenix CPU which is designed for mainstream laptops have been leaked & show a nice gain.",
      url:
        "https://wccftech.com/amd-ryzen-7-7840hs-phoenix-8-core-cpu-benchmarks-up-to-25-percent-faster-versus-ryzen-7-6800h/",
      urlToImage:
        "https://cdn.wccftech.com/wp-content/uploads/2023/01/AMD-Ryzen-7000-Laptop-CPUs.webp",
      publishedAt: "2023-02-05T02:58:00Z",
      content:
        'The first benchmarks of AMD\'s Ryzen 7 7840HS "Phoenix" CPU which is designed for mainstream laptops have been leaked and show a nice gain over its predecessor.\r\nAMD Ryzen 7 7840HS "Phoenix" CPU Is 25… [+3660 chars]',
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "David Robb",
      title:
        "DGA Says “Studios Are Not Yet Prepared To Address Our Key Issues” & Won’t Be First Guild To The Bargaining Table This Year - Deadline",
      description:
        "DGA leaders told their members tonight that the DGA won’t be the first guild at the bargaining table with the AMPTP this year because “the studios are not yet prepared to address our key issues.” I…",
      url:
        "https://deadline.com/2023/02/dga-saying-studios-not-prepared-address-key-issues-wont-be-first-guild-to-bargaining-table-this-year-1235249713/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/02/directors-guild-of-america.jpg?w=1024",
      publishedAt: "2023-02-05T02:41:00Z",
      content:
        "DGA leaders told their members tonight that the DGA won’t be the first guild at the bargaining table with the AMPTP this year because “the studios are not yet prepared to address our key issues.” It’… [+4813 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Train Derailment Causes Massive Fire In Ohio, US | Ohio Train Derailment Today News | News18 LIVE - CNN-News18",
      description:
        "Train Derailment Causes Massive Fire In Ohio, US | Ohio Train Derailment Today News | News18 LIVELocal media reported a train derailed near the border of Ohi...",
      url: "https://www.youtube.com/watch?v=kaTMjOnu9_g",
      urlToImage: "https://i.ytimg.com/vi/kaTMjOnu9_g/maxresdefault_live.jpg",
      publishedAt: "2023-02-05T02:20:38Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "North Carolina vs. Duke Condensed Game | 2022-23 ACC Men's Basketball - ACC Digital Network",
      description:
        "In the first meeting of the Carolina-Duke rivalry since their Final Four meeting, Duke pulled out the victory in Cameron in a defensive battle, 63-57. The Bl...",
      url: "https://www.youtube.com/watch?v=GhSn9FEjYmE",
      urlToImage: "https://i.ytimg.com/vi/GhSn9FEjYmE/maxresdefault.jpg",
      publishedAt: "2023-02-05T01:52:18Z",
      content: null,
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Jace Evans, USA TODAY",
      title:
        "Indiana upsets No. 1 Purdue: Saturday's men's college basketball recap - USA TODAY",
      description:
        "No. 22 Indiana's upset of No. 1 Purdue was the standout game of a college basketball slate that saw six ranked teams go head-to-head.",
      url:
        "https://www.usatoday.com/story/sports/ncaab/2023/02/04/no-1-purdue-upset-saturday-mens-college-basketball-recap/11188985002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/02/04/USAT/9805dd77-a4ab-4d4d-98ba-d83023472763-USATSI_19922806.jpg?auto=webp&crop=1999,1124,x0,y0&format=pjpg&width=1200",
      publishedAt: "2023-02-05T01:30:00Z",
      content:
        "It's the first weekend of February ... which means March Madness is right around the corner.   \r\nThe race for the men's NCAA Tournament heated up Saturday with six matchups of ranked teams going head… [+5933 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "Elon Musk Now Charging Brands $1,000/Month for Gold Checkmarks - TMZ",
      description:
        "Twitter seems poised to start charging major brands and companies a lot of cash to hold on to their gold checkmarks going forward.",
      url:
        "https://www.tmz.com/2023/02/04/elon-musk-charging-brands-1000-month-gold-checkmark/",
      urlToImage:
        "https://imagez.tmz.com/image/00/16by9/2023/02/04/0033afcf897a44e18c146715d5c1df9a_xl.png",
      publishedAt: "2023-02-05T01:04:00Z",
      content:
        "The days of being verified for free on Twitter are coming to an end -- which goes for corporate accounts too ... who'll have pay a pretty penny for their verification status.\r\nA new report from The I… [+2367 chars]",
    },
    {
      source: {
        id: null,
        name: "WMUR Manchester",
      },
      author: "The Associated Press",
      title:
        "DNC approves new presidential primary calendar, strips New Hampshire of 'first-in-the nation' status - WMUR Manchester",
      description:
        "The Democratic National Committee approved a new presidential primary calendar for 2024, stripping New Hampshire of it's 'first-in-the-nation' status. State law mandates the Granite State holds the nation's first presidential primary.",
      url:
        "https://www.wmur.com/article/dnc-approves-presidential-primary-calendar-new-hampshire/42764694",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/vlcsnap-2023-02-04-12h43m38s319-1675532643.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2023-02-04T23:47:00Z",
      content:
        "PHILADELPHIA —The Democratic Party on Saturday approved the reordering of its 2024 presidential primary, replacing Iowa with South Carolina in the leadoff spot as part of a major shake-up meant to em… [+6050 chars]",
    },
    {
      source: {
        id: null,
        name: "WMUR Manchester",
      },
      author: "Jacqueline Thomas",
      title:
        "Dangerously cold temperatures move out of New Hampshire; warm-up coming Sunday - WMUR Manchester",
      description:
        "Dangerously cold temperatures and wind chills gripped New Hampshire for the coldest morning in years, but conditions will continue to improve the rest of the weekend.",
      url:
        "https://www.wmur.com/article/new-hampshire-temperatures-weather-forecast-2423/42763990",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/forecast-sunday-dma-4-1675552543.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2023-02-04T23:15:00Z",
      content:
        "MANCHESTER, N.H. —Dangerously cold temperatures and wind chills gripped New Hampshire for the coldest morning in years, but conditions will continue to improve the rest of the weekend.\r\nA wind chill … [+1819 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Tens of thousands of Israelis protest against justice reform plans - Reuters",
      description:
        "Tens of thousands of Israelis braved heavy rain on Saturday for a fifth week of protests against judicial reform plans by Prime Minister Benjamin Netanyahu's new government that critics say threaten democratic checks on ministers by the courts.",
      url:
        "https://www.reuters.com/world/middle-east/tens-thousands-israelis-protest-against-justice-reform-plans-2023-02-04/",
      urlToImage:
        "https://www.reuters.com/resizer/g0Wg52w-YEKb1eEBtjFECoOZQmc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NQSBXTXEOFPJ7CYFI3N7O7UZ74.jpg",
      publishedAt: "2023-02-04T22:47:00Z",
      content:
        "JERUSALEM, Feb 4 (Reuters) - Tens of thousands of Israelis braved heavy rain on Saturday for a fifth week of protests against judicial reform plans by Prime Minister Benjamin Netanyahu's new governme… [+1764 chars]",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - myNews`
  }

  async updateNews(){
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=876f1a93f48f413da16a217d8494b8c8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(35)
    let parsedData = await data.json();
    console.log(parsedData)
    this.props.setProgress(62)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNext = async () => {
   this.setState({page: this.state.page + 1})
   this.updateNews();
  };

  handlePrev = async () => {
    this.setState({page: this.state.page - 1})
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop: '70px'}}>myNews | Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrev}
            className="btn btn-dark"
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            onClick={this.handleNext}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
