import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import Woman2OutlinedIcon from "@mui/icons-material/Woman2Outlined";
import ManOutlinedIcon from "@mui/icons-material/ManOutlined";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

export const categories = [
  { title: "Health & Wellness", slug: "health-wellness", icon: FavoriteBorderRoundedIcon, description: "Preventive care and everyday habits that support long-term wellbeing.", subtopics: ["Preventive care", "Healthy living", "Health checkups", "Sleep health", "Lifestyle habits"] },
  { title: "Diseases & Conditions", slug: "diseases", icon: CoronavirusOutlinedIcon, description: "Understand common conditions, warning signs and ways to seek appropriate care.", subtopics: ["Symptoms", "Causes", "Risk factors", "Diagnosis", "Condition management"] },
  { title: "Cancer & Oncology", slug: "cancer", icon: BiotechOutlinedIcon, description: "Awareness and explainers about cancer prevention, screening and care.", subtopics: ["Cancer types", "Cancer screening", "Treatment explainers", "Survivorship", "Supportive care"] },
  { title: "Women's Health", slug: "womens-health", icon: Woman2OutlinedIcon, description: "Health information across different stages of women's lives.", subtopics: ["Fertility", "Pregnancy", "PCOS", "Menopause", "Reproductive health"] },
  { title: "Men's Health", slug: "mens-health", icon: ManOutlinedIcon, description: "Awareness of health issues and prevention across men's life stages.", subtopics: ["Prostate health", "Male fertility", "Heart health", "Age-related health", "Preventive checkups"] },
  { title: "Children's Health", slug: "childrens-health", icon: ChildCareOutlinedIcon, description: "Practical awareness for newborns, children and families.", subtopics: ["Newborn care", "Vaccination", "Child nutrition", "Childhood conditions", "Development"] },
  { title: "Heart & Diabetes", slug: "heart-diabetes", icon: MonitorHeartOutlinedIcon, description: "Explore cardiovascular health, blood pressure and diabetes awareness.", subtopics: ["Heart health", "Hypertension", "Diabetes", "Blood sugar", "Metabolic health"] },
  { title: "Mental Health", slug: "mental-health", icon: PsychologyOutlinedIcon, description: "Information that supports understanding of emotional and mental wellbeing.", subtopics: ["Stress", "Anxiety", "Depression", "Sleep wellbeing", "Emotional health"] },
  { title: "Medical Treatments", slug: "medical-treatments", icon: MedicalServicesOutlinedIcon, description: "Understand common medical procedures, diagnostics and treatment approaches.", subtopics: ["Surgery", "Medicines", "Diagnostics", "Therapies", "Medical procedures"] },
  { title: "Nutrition & Fitness", slug: "nutrition-fitness", icon: RestaurantOutlinedIcon, description: "Evidence-aware information about food, movement and healthy routines.", subtopics: ["Healthy nutrition", "Food science", "Exercise", "Weight management", "Fitness habits"] },
  { title: "Medical Research & Innovation", slug: "medical-research", icon: ScienceOutlinedIcon, description: "Follow medical discoveries, research and emerging healthcare technologies.", subtopics: ["Clinical research", "Artificial intelligence", "Medical technology", "New discoveries", "Research explained"] },
  { title: "Global Healthcare", slug: "global-healthcare", icon: PublicOutlinedIcon, description: "Explore health systems, public-health priorities and access to care around the world.", subtopics: ["Healthcare systems", "Public health", "Healthcare access", "Health policies", "Global health news"] }
];

export const editorialFormats = [
  "Doctor's Opinion", "Ask the Expert", "Expert Interviews", "Research Explained",
  "Patient Awareness", "Health News", "Health Myths vs Facts", "Medical Explainers",
  "Infographics", "Video & Reels"
];
