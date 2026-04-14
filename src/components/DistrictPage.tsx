import { motion } from "framer-motion";
import NewsCard from "./NewsCard";

interface DistrictPageProps {
  title: string;
  subtitle: string;
  news: { title: string; description: string; time: string }[];
}

const DistrictPage = ({ title, subtitle, news }: DistrictPageProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="container mx-auto px-4 py-8"
  >
    <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
    <p className="text-muted-foreground mb-8">{subtitle}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((n, i) => (
        <NewsCard key={i} {...n} />
      ))}
    </div>
  </motion.div>
);

export default DistrictPage;
