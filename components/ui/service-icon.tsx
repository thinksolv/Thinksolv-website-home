// components/icons/ServiceIcon.tsx
export default function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case "document-ai":
      return (
        <svg
          className="w-full h-full fill-[#007bbf] dark:fill-white transition-all duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M6 2a2 2 0 0 0-2 2v16c0 1.103.897 2 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM6 4h6v5h6v11H6V4zm2 7v2h8v-2H8zm0 4v2h8v-2H8z" />
        </svg>
      );
    case "web-scraping":
      return (
        <svg
          className="w-full h-full fill-[#007bbf] dark:fill-white transition-all duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h8v2H4v-2z" />
        </svg>
      );
    default:
      return null;
  }
}
