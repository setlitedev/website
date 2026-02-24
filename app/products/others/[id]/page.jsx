// app/products/others/[id]/page.jsx

import SingleProductShowcase from './SingleProductShowcase';

export default function Page({ params }) {
  const { id } = params; // Safe access in server component
  return  <SingleProductShowcase id={id} />;
}
