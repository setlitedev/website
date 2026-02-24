// app/products/others/[id]/page.jsx

import SingleProductShowcase from './SingleProductShowcase';

export default async function Page({ params }) {
  const { id } = await params; // Safe access in server component
  return <SingleProductShowcase id={id} />;
}
