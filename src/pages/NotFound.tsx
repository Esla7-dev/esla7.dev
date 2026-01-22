import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 errors in development only
    if (import.meta.env.DEV) {
      console.warn("404 Error: Route not found:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <h1 className="mb-4 text-8xl font-bold text-accent">404</h1>
        <h2 className="mb-4 heading-section text-foreground">الصفحة غير موجودة</h2>
        <p className="mb-8 text-body text-muted-foreground max-w-md mx-auto">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان آخر
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={20} />
          العودة للرئيسية
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
