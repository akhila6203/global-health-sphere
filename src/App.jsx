import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import CategoryPage from "./pages/CategoryPage";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
import { AboutPage, HealthNewsPage, ExpertsPage, EditorialPolicyPage, DisclaimerPage, ContactPage } from "./pages/StaticPages";
import HealthTopicsPage from "./pages/HealthTopicsPage";
import { categories } from "./data/categories";

function NotFound(){return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><div className="rounded-xl border border-dashed border-[#cbd9df] p-10 text-center text-[#34445d]"><h1>Page not found</h1><p>The page may have moved. Explore the health library instead.</p><a href="/">Go to home</a></div></main>}

export default function App(){
  return <><Header/><Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/articles/" element={<ArticlesPage/>}/>
    <Route path="/article/:slug/" element={<ArticleDetailPage/>}/>
    <Route path="/health/" element={<HealthTopicsPage/>}/>
    {categories.map((category) => (
      <Route key={category.slug} path={`/${category.slug}/`} element={<CategoryPage slug={category.slug} />} />
    ))}
    <Route path="/countries/" element={<CountriesPage/>}/>
    <Route path="/countries/:slug/" element={<CountryPage/>}/>
    <Route path="/health-news/" element={<HealthNewsPage/>}/>
    <Route path="/doctors-opinions/" element={<ExpertsPage/>}/>
    <Route path="/about/" element={<AboutPage/>}/>
    <Route path="/editorial-policy/" element={<EditorialPolicyPage/>}/>
    <Route path="/medical-disclaimer/" element={<DisclaimerPage/>}/>
    <Route path="/contact/" element={<ContactPage/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes><Footer/></>;
}











// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import ArticlesPage from "./pages/ArticlesPage";
// import ArticleDetailPage from "./pages/ArticleDetailPage";
// import CategoryPage from "./pages/CategoryPage";
// import CountriesPage from "./pages/CountriesPage";
// import CountryPage from "./pages/CountryPage";
// import { AboutPage, HealthNewsPage, ExpertsPage, EditorialPolicyPage, DisclaimerPage, ContactPage } from "./pages/StaticPages";
// import HealthTopicsPage from "./pages/HealthTopicsPage";
// import { categories } from "./data/categories";   // ← ee line add cheyandi


// function NotFound(){return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><div className="rounded-xl border border-dashed border-[#cbd9df] p-10 text-center text-[#34445d]"><h1>Page not found</h1><p>The page may have moved. Explore the health library instead.</p><a href="/">Go to home</a></div></main>}

// export default function App(){
//   return <><Header/><Routes>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/articles/" element={<ArticlesPage/>}/>
//     <Route path="/article/:slug/" element={<ArticleDetailPage/>}/>
//     <Route path="/health/" element={<HealthTopicsPage/>}/>

//     <Route path="/health/" element={<HealthTopicsPage/>}/>
//     {categories.map((category) => (
//       <Route
//         key={category.slug}
//         path={`/${category.slug}/`}
//         element={<CategoryPage slug={category.slug} />}
//       />
//     ))}

//     <Route path="/countries/" element={<CountriesPage/>}/>
//     <Route path="/countries/" element={<CountriesPage/>}/>
//     <Route path="/countries/:slug/" element={<CountryPage/>}/>
//     <Route path="/health-news/" element={<HealthNewsPage/>}/>
//     <Route path="/doctors-opinions/" element={<ExpertsPage/>}/>
//     <Route path="/about/" element={<AboutPage/>}/>
//     <Route path="/editorial-policy/" element={<EditorialPolicyPage/>}/>
//     <Route path="/medical-disclaimer/" element={<DisclaimerPage/>}/>
//     <Route path="/contact/" element={<ContactPage/>}/>
//     <Route path="*" element={<NotFound/>}/>
//   </Routes><Footer/></>;
// }
