import { motion } from "framer-motion";
import NewsCard from "@/components/NewsCard";
import NewsTicker from "@/components/NewsTicker";

const homeNews = [
  { title: "கொங்கு மண்டலத்தில் நீர் மேலாண்மை திட்டம் தொடக்கம்", description: "7 மாவட்டங்களில் புதிய நீர்ப்பாசன திட்டம் செயல்படுத்தப்படும் என அரசு அறிவிப்பு.", time: "1 மணி நேரம் முன்" },
  { title: "கோயம்புத்தூரில் ₹5000 கோடி தொழிற்சாலை முதலீடு", description: "IT மற்றும் உற்பத்தி துறையில் புதிய முதலீட்டாளர்கள் ஆர்வம் காட்டுகின்றனர்.", time: "2 மணி நேரம் முன்" },
  { title: "அரசு பள்ளிகளில் டிஜிட்டல் கல்வி விரிவாக்கம்", description: "ஸ்மார்ட் வகுப்பறைகள் மற்றும் டேப்லெட் வழங்கும் திட்டம் அறிவிக்கப்பட்டது.", time: "3 மணி நேரம் முன்" },
  { title: "சுற்றுச்சூழல் பாதுகாப்பு: புதிய மரம் நடும் திட்டம்", description: "கொங்கு பகுதியில் 10 லட்சம் மரங்கள் நட இலக்கு நிர்ணயிக்கப்பட்டுள்ளது.", time: "4 மணி நேரம் முன்" },
  { title: "சுகாதார துறை விரிவாக்கம்: புதிய மருத்துவமனைகள்", description: "ஒவ்வொரு மாவட்டத்திலும் புதிய அரசு மருத்துவமனை கட்டப்படும்.", time: "5 மணி நேரம் முன்" },
  { title: "பொது நல திட்டங்கள்: குடும்ப அட்டை புதுப்பிப்பு", description: "அனைத்து மாவட்டங்களிலும் குடும்ப அட்டை புதுப்பிப்பு முகாம் நடைபெறும்.", time: "6 மணி நேரம் முன்" },
];


const Index = () => (
  <div>
    <NewsTicker />
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-2">தமிழ்நாடு செய்திகள்</h2>
      <p className="text-muted-foreground mb-8">முழு தமிழ்நாடு தொகுக்கும் முக்கிய செய்திகள் மற்றும் மாவட்ட செய்திகளை இங்கே படியுங்கள்.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeNews.map((n, i) => <NewsCard key={i} {...n} />)}
      </div>
    </motion.div>
  </div>
);

export default Index;
