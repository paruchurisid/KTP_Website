import type { Member, MemberRole } from "@/types";

const headshots = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
];

const eboardPositions = ["President", "VP External Affairs", "VP Internal Affairs", "VP Finance", "VP Engagement", "VP Membership", "VP Marketing", "VP Professional Development", "VP Technical Development"];
const names = [["Maya","Patel"],["Eli","Thompson"],["Nora","Chen"],["Caleb","Williams"],["Sofia","Martinez"],["Owen","Brooks"],["Amara","Okafor"],["Theo","Kim"],["Lena","Foster"],["Miles","Robinson"],["Iris","Nguyen"],["Noah","Davis"],["Zara","Ali"],["Ben","Kaplan"],["Avery","Scott"],["Jordan","Price"],["Sam","Rao"],["Tessa","Miller"],["Leo","Gonzalez"],["Priya","Shah"],["Cam","Reed"],["Jules","Morgan"],["Rina","Park"],["Devin","Cole"]];
const majors = ["Computer Science & Engineering", "Data Analytics", "Information Systems (Fisher)", "Industrial & Systems Engineering", "Computer Engineering", "Marketing", "Design", "Finance", "Public Policy", "Biomedical Engineering"];
const classes = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta"];
const companies = ["JPMorgan Chase", "Nationwide", "Cardinal Health", "Huntington", "Intel", "Honda", "Battelle", "Root", "CoverMyMeds"];

const members: Member[] = names.map(([firstName,lastName], index) => {
  const role: MemberRole = index < 9 ? "eboard" : index < 15 ? "active" : index < 19 ? "director" : "alumni";
  return {
    id: `${firstName}-${lastName}`.toLowerCase(), firstName, lastName, role,
    pledgeClass: classes[index % classes.length], gradYear: 2026 + (index % 5), major: majors[index % majors.length],
    headshot: index === 11 || index === 17 ? undefined : headshots[index % headshots.length],
    linkedin: "https://www.linkedin.com", position: role === "eboard" ? eboardPositions[index] : role === "director" ? ["Design Director", "DEI Director", "Alumni Director", "Service Director"][index - 15] : undefined,
    company: role === "alumni" ? companies[index % companies.length] : undefined,
  };
});

export async function getMembers(): Promise<Member[]> { return members; }
export async function getMembersByRole(role: MemberRole): Promise<Member[]> { return members.filter((member) => member.role === role); }
