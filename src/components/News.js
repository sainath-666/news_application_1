import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "John Bacon",
      title:
        "'Chaotic from the get-go': 1 dead, many wounded in Houston shooting rampage",
      description:
        "Police said multiple people were hospitalized in critical condition and others were in stable condition.",
      url: "https://www.usatoday.com/story/news/nation/2025/05/04/houston-shooting-updates/83443175007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/05/04/USAT/83443312007-usatsi-18743885.jpg?crop=3210,1806,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2025-05-04T13:26:04+00:00",
      content:
        '<ul><li>Multiple people were detained for questioning.</li><li>The shooting began after an "uninvited guest" was asked to leave, police said.</li></ul>One person was killed and more than a dozen woun… [+1146 chars]',
    },
    {
      source: { id: "les-echos", name: "Les Echos" },
      author: "Enrique Moreira",
      title:
        "Grève SNCF: trafic francilien «fortement perturbé» sur certaines lignes lundi",
      description:
        "En prévision d'une semaine tout de même perturbée par les multiples appels à la grève, la SNCF propose « dès maintenant » à tous ses clients d'échanger ou rembourser « sans frais » les billets TGV Inoui comme Ouigo. Et ce, même si le train circule.",
      url: "https://www.lesechos.fr/industrie-services/tourisme-transport/greves-sncf-vers-une-semaine-aussi-normale-que-possible-assure-sncf-voyageurs-2163351",
      urlToImage:
        "https://media.lesechos.com/api/v1/images/view/681745b5bf4485baf10c41c4/1280x720/01402847943117-web-tete.jpg",
      publishedAt: "2025-05-04T10:47:10Z",
      content:
        "Par Enrique Moreira\r\nPublié le 4 mai 2025 à 12:47Mis à jour le 4 mai 2025 à 18:51\r\nLa SNCF tient à rassurer ses usagers. « Nous sommes loin d'une semaine noire, il n'y aura pas de semaine à l'arrêt, … [+146 chars]",
    },
    {
      source: { id: "le-monde", name: "Le Monde" },
      author: "Jessica Gourdon, Julie Cassotti, Benjamin Martinez",
      title:
        "Le tourisme sous l’influence de TikTok et d’Instagram : comment les réseaux sociaux ont transformé nos vacances",
      description:
        "Photos, conseils, récits et publicités autour du voyage ont explosé sur les réseaux sociaux : ils transforment les imaginaires et l’expérience du voyage, avec de multiples effets collatéraux.",
      url: "https://www.lemonde.fr/economie/article/2025/05/04/le-tourisme-sous-l-influence-de-tiktok-et-d-instagram-comment-les-reseaux-sociaux-ont-transforme-nos-vacances_6602794_3234.html",
      urlToImage:
        "https://img.lemde.fr/2025/05/02/0/7/8652/5768/1440/960/60/0/92f92c2_sirius-fs-upload-1-vgq77jlnbsl3-1746178528827-gettyimages-2209959571.jpg",
      publishedAt: "2025-05-04T04:30:00Z",
      content:
        "Si vous passez rue Charlot, à Paris, à lheure du déjeuner, vous croiserez sans doute une file dattente de part et dautre détroits trottoirs. Des touristes espagnols, américains ou coréens y font la q… [+1574 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Nicole Winfield",
      title:
        "Pope Francis left unfinished business after a 12-year papacy. What challenges await the next pope?",
      description:
        "While Pope Francis accomplished a lot in his 12-year papacy, he left much unfinished business and many challenges for his successor — from the Vatican’s disastrous finances to the wars raging on multiple continents. When the conclave’s cardinals finish castin…",
      url: "https://apnews.com/article/pope-conclave-challenges-lgbtq-women-sex-abuse-e73199910f1723282b91984f207ad5a0",
      urlToImage:
        "https://dims.apnews.com/dims4/default/f48f1ce/2147483647/strip/true/crop/5616x3159+0+293/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbf%2F25%2F5444d9ca67d9af32c8136104ca03%2F02b6f038ebff4275a12503eed7f3bb20",
      publishedAt: "2025-05-04T04:07:31Z",
      content:
        "VATICAN CITY (AP) While Pope Franci s accomplished a lot in his 12-year papacy, he left much unfinished business and many challenges for his successor from the Vaticans disastrous finances to the war… [+7407 chars]",
    },
    {
      source: { id: "buzzfeed", name: "Buzzfeed" },
      author: "David Bohórquez",
      title: "Quiz: ¿Podrías conquistar el triplete con el FC Barcelona?",
      description: "Hacía años que no veíamos a un Barça taaaan bueno",
      url: "https://www.buzzfeed.com/mx/david_bohorquez09/responde-este-quiz-y-te-dire-si-podrias-ganar-el-triplete",
      urlToImage:
        "https://img.buzzfeed.com/buzzfeed-static/static/2025-05/02/17/thumb/VcDLpmiAE.jpg?crop=1245:830;3,0&resize=1250:830",
      publishedAt: "2025-05-03T20:22:36.8276559Z",
      content:
        "Si te tocó ver a aquel Barcelona de Lionel Messi, Luis Suárez y Neymar que dominó Europa, probablemente hoy ya tengas que pagar impuestos y esas cosas de adultos. Así que no me dejarás mentir cuando … [+487 chars]",
    },
    {
      source: { id: "next-big-future", name: "Next Big Future" },
      author: "Brian Wang",
      title: "Banned Performance Enhancing Shoes | NextBigFuture.com",
      description:
        "In 2025, some banned running shoes, particularly those with multiple carbon plates or excessive midsole height, could potentially provide a 2-4% performance",
      url: "https://www.nextbigfuture.com/2025/05/banned-performance-enhancing-shoes.html",
      urlToImage:
        "https://nextbigfuture.s3.amazonaws.com/uploads/2025/05/Screenshot-2025-05-03-at-11.03.24-AM.jpg",
      publishedAt: "2025-05-03T18:12:20Z",
      content:
        "In 2025, some banned running shoes, particularly those with multiple carbon plates or excessive midsole height, could potentially provide a 2-4% performance enhancement compared to standard running s… [+2320 chars]",
    },
    {
      source: { id: "msnbc", name: "MSNBC" },
      author: "Allison Detzel",
      title:
        "Trump’s DOJ agrees to settlement with family of Ashli Babbitt, rioter killed on Jan. 6",
      description:
        "The Justice Department has agreed to a settlement in principle with the family of Ashli Babbitt, who was killed by a police officer during the Jan. 6 attack.",
      url: "https://www.msnbc.com/top-stories/latest/ashli-babbitt-settlement-jan-6-trump-doj-rcna204525",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-02/210107-ashli-babbitt-ew-1236p-87d2d5.jpg",
      publishedAt: "2025-05-02T21:46:47Z",
      content:
        "The Justice Department has reached a settlement in principle with the family of Ashli Babbitt, the Jan. 6 rioter who was fatally shot by a police officer during the 2021 attack on the U.S. Capitol. D… [+2033 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: "Caitlin Oprysko",
      title:
        "Trump-connected lobbying firm Ballard Partners rakes in $14M in first quarter",
      description: "The firm more than tripled its revenue from a year ago.",
      url: "https://www.politico.com/news/2025/04/21/ballard-lobbying-trump-revenues-00301056",
      urlToImage:
        "https://static.politico.com/8c/27/3ac046644e01959b6ce08543676d/secondaryphoto1.jpg",
      publishedAt: "2025-04-21T17:21:53+00:00",
      content:
        "The beginning of any new administration tends to be lucrative for the lobbying industry and business was already booming on K Street before Trump swept into office again.\r\nAt the end of last year, Br… [+2343 chars]",
    },
    {
      source: { id: "the-next-web", name: "The Next Web" },
      author: "Siôn Geschwindt",
      title:
        "Mobility giant Bolt adopts self-driving Starship robots for food delivery",
      description:
        "Bolt plans to roll out thousands of the robots across multiple countries, starting in its home city of Tallinn later this year.",
      url: "http://thenextweb.com/news/mobility-giant-bolt-adopts-self-driving-starship-robots-for-food-delivery",
      urlToImage:
        "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2Fbolt-starship-robot-delivery.jpg&signature=c902ce701ce95e20f6fd703a50ad52ca",
      publishedAt: "2023-06-22T09:17:15Z",
      content:
        "European ride-hailing firm Bolt will start using self-driving robots to deliver customers food as part of a new partnership with fellow Estonian company Starship Technologies, announced yesterday.  \r… [+2447 chars]",
    },
    {
      source: { id: "the-globe-and-mail", name: "The Globe And Mail" },
      author: "Molly Hayes",
      title:
        "OPP officers provide testimony at inquest into 2015 triple murders",
      description:
        "Four OPP officers addressed difficulties they had while discovering three deaths in 2015 connected by intimate partner violence",
      url: "https://www.theglobeandmail.com/canada/article-opp-provide-testimony-at-inquest-into-2015-triple-murders/",
      urlToImage:
        "https://www.theglobeandmail.com/resizer/B_0AHIFyolFcOl24Dt2Q82GJ_f4=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/BPRCBGA52VCDHGHL2GMDLH2QSA.JPG",
      publishedAt: "2022-06-16T01:18:17Z",
      content:
        "A real estate billboard of slain Anastasia Kuzyk along Highway 60 in Wilno, Ont., in 2015.Dave Chan/The Globe and Mail\r\nAs soon as she heard Anastasia Kuzyks address read out over her police radio on… [+4544 chars]",
    },
    {
      source: { id: "the-hindu", name: "The Hindu" },
      author: "The Hindu",
      title: "Limits of cooperation: On reforms in cooperative sector",
      description:
        "Reforms in cooperative sector should not be at the cost of federal principles",
      url: "https://www.thehindu.com/opinion/editorial/limits-of-cooperation-the-hindu-editorial-on-reforms-in-cooperative-sector/article35478339.ece",
      urlToImage:
        "https://www.thehindu.com/static/theme/default/base/img/og-image.jpg",
      publishedAt: "2021-07-22T18:32:00Z",
      content:
        "The cooperative movement certainly needs reform and revitalisation. Beset by political interference, many cooperative societies do not hold elections regularly, while some are superseded frequently. … [+2692 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Times Of India",
      title:
        "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
      description:
        "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
      url: "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2021-04-23T05:44:49Z",
      content:
        "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 90)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
