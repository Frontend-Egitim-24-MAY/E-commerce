import { PortableText, PortableTextBlock } from "next-sanity";

export const MyPortableText = ({ value }: { value: PortableTextBlock }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          // Paragraf stilleri
          normal: ({ children }) => (
            <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
          ),
          // Başlık stilleri
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-8">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-3xl font-semibold text-gray-800 mb-2 mt-4">
              {children}
            </h4>
          ),
          // Alıntı stilleri
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
              {children}
            </blockquote>
          ),
        },
        list: {
          // Liste stilleri
          bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 text-gray-700">{children}</ol>
          ),
        },
        listItem: {
          bullet: ({ children }) => <li className="mb-1">{children}</li>,
          number: ({ children }) => <li className="mb-1">{children}</li>,
        },
        marks: {
          // Metin vurguları
          strong: ({ children }) => (
            <strong className="font-bold text-gray-800 underline">
              {children}
            </strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          code: ({ children }) => (
            <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm font-mono">
              {children}
            </code>
          ),
          link: ({ children, value }) => (
            <a
              href={value?.href}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        },
      }}
    />
  );
};
