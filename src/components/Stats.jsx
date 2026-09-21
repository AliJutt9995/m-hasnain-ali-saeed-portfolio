import { Briefcase, Users, Award, ThumbsUp } from "lucide-react";
import "../styles/stats.css";

const stats = [
  {
    icon: Briefcase,
    number: "32+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    number: "26+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    number: "5+",
    label: "Years Experience",
  },
  {
    icon: ThumbsUp,
    number: "96%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={item.label}>
              <div className="stat-icon">
                <Icon size={22} />
              </div>

              <div>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}