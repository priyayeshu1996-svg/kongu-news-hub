import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Candidate {
  id: number;
  name: string;
  party: string;
  district: string;
  position: string;
  experience: string;
  image?: string;
}

const candidates2026: Candidate[] = [
  {
    id: 1,
    name: "முனைவர் ராজேஷ் குமார்",
    party: "கிழக்கு கொங்கு கூட்டணி",
    district: "கோயம்புத்தூர்",
    position: "மாவட்ட ஆளுநர் வேட்பாளர்",
    experience: "20 ஆண்டு அரசியல் அனுபவம்",
  },
  {
    id: 2,
    name: "திருமதி சரிதா வர்மா",
    party: "மக்கள் மாற்றம் இயக்கம்",
    district: "ஈரோடு",
    position: "மாவட்ட சபை உறுப்பினர்",
    experience: "15 ஆண்டு சமூக சேவை",
  },
  {
    id: 3,
    name: "திரு கணேஷ் நாயக்",
    party: "கொங்கு முன்னேற்ற கட்சி",
    district: "திருப்பூர்",
    position: "நகர சபை தலைவர் வேட்பாளர்",
    experience: "12 ஆண்டு பொது நிர்வாகம்",
  },
  {
    id: 4,
    name: "ஸ்ரீ பிரபாகரன் கணேசன்",
    party: "கொங்கு மக்கள் பக்கம்",
    district: "கரூர்",
    position: "மாவட்ட செயலாளர்",
    experience: "18 ஆண்டு கட்சி சேவை",
  },
  {
    id: 5,
    name: "திருமதி அனந்த லட்சுமி",
    party: "சமூக நீதி முன்னணி",
    district: "சேலம்",
    position: "மாநகர சபை துணை தலைவர்",
    experience: "22 ஆண்டு சட்டமன்ற அனுபவம்",
  },
  {
    id: 6,
    name: "திரு வித்யாசாகர் ராமன்",
    party: "கொங்கு அமிர்த கட்சி",
    district: "நாமக்கல்",
    position: "மாவட்ட ஆளுனர் உதவியாளர்",
    experience: "10 ஆண்டு நிர்வாக சேவை",
  },
  {
    id: 7,
    name: "கோ. கனகராஜ்",
    party: "தமிழ் சண்டாய கொங்கு",
    district: "திண்டுக்கல்",
    position: "மாவட்ட ஒன்றிய வேட்பாளர்",
    experience: "25 ஆண்டு பாவன அனுபவம்",
  },
  {
    id: 8,
    name: "கு. சுந்தரசாமி",
    party: "கொங்கு வளர்ச்சி இயக்கம்",
    district: "கோயம்புத்தூர்",
    position: "மாவட்ட சபை உறுப்பினர்",
    experience: "16 ஆண்டு பொது சேவை",
  },
];

const districtNames: Record<string, string> = {
  coimbatore: "கோயம்புத்தூர்",
  erode: "ஈரோடு",
  tiruppur: "திருப்பூர்",
  karur: "கரூர்",
  salem: "சேலம்",
  namakkal: "நாமக்கல்",
  dindigul: "திண்டுக்கல்",
};

const partyColors: Record<string, string> = {
  "கிழக்கு கொங்கு கூட்டணி": "bg-orange-100 text-orange-800",
  "மக்கள் மாற்றம் இயக்கம்": "bg-blue-100 text-blue-800",
  "கொங்கு முன்னேற்ற கட்சி": "bg-green-100 text-green-800",
  "கொங்கு மக்கள் பக்கம்": "bg-red-100 text-red-800",
  "சமூக நீதி முன்னணி": "bg-purple-100 text-purple-800",
  "கொங்கு அமிர்த கட்சி": "bg-pink-100 text-pink-800",
  "தமிழ் சண்டாய கொங்கு": "bg-yellow-100 text-yellow-800",
  "கொங்கு வளர்ச்சி இயக்கம்": "bg-indigo-100 text-indigo-800",
};

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const featuredNews: NewsItem[] = [
  {
    id: 1,
    title: "2026 தேர்தல் அறிவிப்பு",
    description: "கொங்கு மண்டலத்தில் 7 மாவட்டங்களில் தேர்தல் அறிவிக்கப்பட்டுள்ளது",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop",
    date: "12 ஏப்ரல் 2026"
  },
  {
    id: 2,
    title: "வேட்பாளர் பட்டியல் வெளியீடு",
    description: "பல்வேறு கட்சிகளிலிருந்து 2026 வேட்பாளர்கள் பதிவு செய்யப்பட்டுள்ளனர்",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    date: "10 ஏப்ரல் 2026"
  },
  {
    id: 3,
    title: "அभियான் தொடக்கம்",
    description: "வேட்பாளர்கள் தங்கள் அभियான் நடவடிக்கையை தொடங்கியுள்ளனர்",
    image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=300&fit=crop",
    date: "9 ஏப்ரல் 2026"
  },
];

const CandidatesList = () => {
  const [searchParams] = useSearchParams();
  const districtQuery = searchParams.get("district")?.trim().toLowerCase();
  const districtName = districtQuery ? districtNames[districtQuery] : undefined;
  const filteredCandidates = districtName
    ? candidates2026.filter((candidate) => candidate.district === districtName)
    : candidates2026;

  const displayTitle = districtName
    ? `${districtName} மாவட்டத்தின் 2026 வேட்பாளர்கள்`
    : "அனைத்து வேட்பாளர்களும்";

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            வேட்பாளர் பட்டியல் 2026
          </h1>
          <p className="text-lg text-muted-foreground">{displayTitle}</p>
        </div>

        {/* Featured News Section */}
        <div className="mb-12 py-8 border-t border-b border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            தேர்தல் செய்திகள்
          </h2>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {news.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      📅 {news.date}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Candidates Display Section (No Filter Buttons) */}
        <Card className="mb-8 bg-card border border-border">
          <CardContent className="pt-6">
            {filteredCandidates.length === 0 ? (
              <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  இந்த மாவட்டத்திற்கு வேட்பாளர்கள் இல்லை.
                </p>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCandidates.map((candidate, index) => (
                  <motion.div
                    key={candidate.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-base break-words">
                              {candidate.name}
                            </CardTitle>
                            <CardDescription className="mt-1 text-xs">
                              {candidate.position}
                            </CardDescription>
                          </div>
                          <Badge className="whitespace-nowrap text-xs" variant="secondary">
                            {candidate.district}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              partyColors[candidate.party] || "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {candidate.party}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">அனுபவம்</p>
                          <p className="text-sm font-medium">{candidate.experience}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                மொத்த வேட்பாளர்கள்
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{candidates2026.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                கட்சிகளின் எண்ணிக்கை
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {new Set(candidates2026.map((c) => c.party)).size}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                மாவட்டங்கள்
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {new Set(candidates2026.map((c) => c.district)).size}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-6 bg-muted rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            இந்தத் தகவல் 2026-ம் ஆண்டிற்கான அனுமानित வேட்பாளர் விவரங்கள்.
            <br />
            அதிகாரப்பூர்வ பட்டியலுக்கு தேர்தல் ஆணையம் வலைத்தளம் பார்க்கவும்.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CandidatesList;
