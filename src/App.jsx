import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import CategoryPage from "./pages/CategoryPage";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
import { AboutPage, HealthNewsPage, ExpertsPage, EditorialPolicyPage, DisclaimerPage, ContactPage, HealthTopicsPage } from "./pages/StaticPages";

function NotFound(){return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><div className="rounded-xl border border-dashed border-[#cbd9df] p-10 text-center text-[#34445d]"><h1>Page not found</h1><p>The page may have moved. Explore the health library instead.</p><a href="/">Go to home</a></div></main>}

export default function App(){
  return <><Header/><Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/articles/" element={<ArticlesPage/>}/>
    <Route path="/article/:slug/" element={<ArticleDetailPage/>}/>
    <Route path="/health/" element={<HealthTopicsPage/>}/>
    <Route path="/health-wellness/" element={<CategoryPage/>}/>
    <Route path="/diseases/" element={<CategoryPage/>}/>
    <Route path="/cancer/" element={<CategoryPage/>}/>
    <Route path="/womens-health/" element={<CategoryPage/>}/>
    <Route path="/mens-health/" element={<CategoryPage/>}/>
    <Route path="/childrens-health/" element={<CategoryPage/>}/>
    <Route path="/heart-diabetes/" element={<CategoryPage/>}/>
    <Route path="/mental-health/" element={<CategoryPage/>}/>
    <Route path="/medical-treatments/" element={<CategoryPage/>}/>
    <Route path="/nutrition-fitness/" element={<CategoryPage/>}/>
    <Route path="/medical-research/" element={<CategoryPage/>}/>
    <Route path="/global-healthcare/" element={<CategoryPage/>}/>
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
