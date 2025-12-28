/**
 * StructuredData Component
 * 
 * Renders JSON-LD structured data for SEO
 * This component injects Schema.org markup into the page
 */

export default function StructuredData({ data }) {
  if (!data) return null;

  // Handle both single schema and array of schemas
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
