import ArticleCard from "../components/ArticleCard";

const articles = [
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle:
      "sodghsadddddddd dddddd dddddd dddada sda sdasd  ohgoljsg usrfsjklgb lsrhg use ",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle: "h sdthsdth sdh r",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle: "h sdthsdth sdh r",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle: "h sdthsdth sdh r",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle: "h sdthsdth sdh r",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle: "h sdthsdth sdh r",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle:
      "sodghsadddddddd dddddd dddddd dddada sda sdasd  ohgoljsg usrfsjklgb lsrhg use ",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle:
      "sodghsadddddddd dddddd dddddd dddada sda sdasd  ohgoljsg usrfsjklgb lsrhg use ",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle:
      "sodghsadddddddd dddddd dddddd dddada sda sdasd  ohgoljsg usrfsjklgb lsrhg use ",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle:
      "sodghsadddddddd dddddd dddddd dddada sda sdasd  ohgoljsg usrfsjklgb lsrhg use ",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle:
      "sodghsadddddddd dddddd dddddd dddada sda sdasd  ohgoljsg usrfsjklgb lsrhg use ",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },
  {
    writerImage:
      "https://fastly.picsum.photos/id/957/600/400.jpg?hmac=lIukz_kppuEjeisNavJdhmV4HdgHUV1k3etaf0H3HyY",
    writerName: "John Doe",
    articleTitle:
      "sodghsadddddddd dddddd dddddd dddada sda sdasd  ohgoljsg usrfsjklgb lsrhg use ",
    articleImage:
      "https://fastly.picsum.photos/id/48/600/400.jpg?hmac=cCi79K4z3DzPqjEvIrMM-D2KVfFRngC631Qx8g9PPxo",
    articleContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem 1001s fdsh  ahsfuoofgakhfg g aisdkfg skfgkashd fgkashf gakhsjdgf hsjkadgf hasjdkfg hsjkadfg hsjdgf hsjkadfg khgf lui kgf khasdf ghajkwgf hiaskkfg ikhsfg ikhwsrgf hsikfg skhaldfg hsjkad fgksjhadf  gsjhd",
    readTime: 5,
  },

  // Add more articles as needed
];

const Home = () => {
  return (
    <div className="pt-2 bg-slate-50">
      <div className="grid  grid-cols-1  ">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
