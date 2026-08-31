import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-studio-bg-subtle px-4 py-32">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-studio-green-100 flex items-center justify-center text-studio-green mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-studio-green">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-studio-dark">
            Space Undefined
          </h1>
          <p className="text-xs sm:text-sm text-studio-body leading-relaxed">
            The architectural page or resource you are looking for does not exist or has been relocated within our blueprints.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-studio-green text-white text-xs font-semibold uppercase tracking-wider hover:bg-studio-green-600 transition-colors shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Studio Home</span>
          </Link>
          <Link
            href="/works"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-studio-border text-studio-dark text-xs font-semibold uppercase tracking-wider hover:bg-studio-green-50 transition-colors"
          >
            <span>Explore Works</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
