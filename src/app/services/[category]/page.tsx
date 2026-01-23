import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPageClient from "./CategoryPageClient";
import { categories, getServicesByCategory, getCategoryBySlug } from "@/lib/data/services";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Services`,
    description: `${category.description}. Book ${category.name.toLowerCase()} treatments at Plush Beauty Spa in Khalifa City, Abu Dhabi. Starting from AED ${category.startingPrice}.`,
    openGraph: {
      title: `${category.name} Services | Plush Beauty Spa`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryServices = getServicesByCategory(categorySlug);

  return <CategoryPageClient category={category} services={categoryServices} />;
}
