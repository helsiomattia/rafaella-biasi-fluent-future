import { LucideIcon } from "lucide-react";

// ── Navigation ──────────────────────────────────────────────
export interface NavItem {
  label: string;
  path: string;
}

export interface DashboardLink {
  icon: LucideIcon;
  label: string;
  path: string;
}

// ── Pricing / Plans ─────────────────────────────────────────
export interface Plan {
  name: string;
  desc: string;
  price: string;
  period: string;
  features: string[];
  buttonLabel: string;
  accent: boolean;
}

export interface WizardAnswers {
  challenge: string;
  time: string;
  style: string;
}

// ── Course Modules ──────────────────────────────────────────
export type ModuleStatus = "completed" | "in-progress" | "locked";

export interface CourseModule {
  id: number;
  title: string;
  classes: number;
  completed: number;
  status: ModuleStatus;
  desc: string;
}

// ── Quiz / Level Test ───────────────────────────────────────
export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface LevelResult {
  min: number;
  max: number;
  level: string;
  icon: LucideIcon;
  color: string;
  desc: string;
}

// ── Hub / Videos ────────────────────────────────────────────
export interface VideoItem {
  id: number;
  title: string;
  platform: "youtube" | "instagram";
  duration: string;
  category: string;
}

// ── Dashboard Materials ─────────────────────────────────────
export interface MaterialFile {
  title: string;
  type: string;
  size: string;
}

// ── Admin KPI ───────────────────────────────────────────────
export interface KPIData {
  title: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
}
