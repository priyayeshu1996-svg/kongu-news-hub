import { motion } from "framer-motion";

interface NewsCardProps {
  title: string;
  description: string;
  time: string;
}

const NewsCard = ({ title, description, time }: NewsCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="rounded-lg bg-card p-5 shadow-md border border-border hover:shadow-lg transition-shadow"
  >
    <h3 className="text-lg font-semibold text-foreground mb-2 leading-relaxed">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{description}</p>
    <span className="text-xs text-primary font-medium">🕐 {time}</span>
  </motion.div>
);

export default NewsCard;
