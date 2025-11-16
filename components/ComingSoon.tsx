export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          David Steinbroner
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Full-Stack PM & Builder
        </p>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Portfolio launching soon. Building something great.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:davidsteinbroner@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/davidsteinbroner/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
