import { Link, useParams } from "react-router-dom";
import ArticleLibrary from "../components/ArticleLibrary";
import { categories } from "../data/categories";

export default function CategoryPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] py-12 lg:w-[calc(100%-4rem)]">
        <h1 className="text-2xl font-extrabold text-[#123c8c]">Health topic not found</h1>
        <Link className="mt-3 inline-flex font-bold text-[#079da7]" to="/health/">Browse all health topics</Link>
      </main>
    );
  }

  const Icon = category.icon;

  return (
    <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] py-10 lg:w-[calc(100%-4rem)] max-md:py-7">
      <header className="mb-6">
        <h1 className="text-left text-3xl font-extrabold text-[#123c8c] md:text-4xl">{category.title}</h1>
        <p className="mt-2 max-w-3xl text-left text-sm leading-6 text-[#52647a] sm:text-base">{category.description}</p>
      </header>

      <ArticleLibrary
        key={category.slug}
        title={`${category.title} Articles`}
        showHeading={false}
        showFilters={false}
        initialCategory={category.slug}
        lockedCategory
      />
    </main>
  );
}







