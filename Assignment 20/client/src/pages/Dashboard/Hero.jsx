import React, { useState, useEffect, useCallback } from "react";
import {
    Zap, Plus, LayoutDashboard, ListChecks, BarChart3, CalendarDays,
    Settings as SettingsIcon, HelpCircle, LogOut, Search, Bell,
    ClipboardCheck, Hourglass, AlertTriangle, Clock, Pencil, Trash2,
    Copy, X, ChevronLeft, ChevronRight, ArrowRight, ImagePlus, CalendarClock, MapPin, Circle, Loader2, CheckCircle2, Sun, Moon
} from "lucide-react";
import toast from "react-hot-toast";
import axios from 'axios';
import { useAuth } from "../../context/Auth";

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "tasks", label: "Tasks", icon: ListChecks },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "calendar", label: "Calendar", icon: CalendarDays },
    { id: "ai-prompt", label: "AI Prompt", icon: Zap },
    { id: "settings", label: "Settings", icon: SettingsIcon },
];

const AVATAR_1 =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8XH3ghKc7hTVG0k_M0f8cAe1yUebpEQYnDU9HhY9Bl61m2dOO9iOVsBNf-NrOFZZr_BtG4x-F9KikJLhx5H67_BcJLkgPys5AqKt3O2-PC7ERMkkD04lPWAhmS7iKzfkpUVD_SkcHDbYLtgXkqAV8qFWOR5TlZwtHaOeEh4lPVhtGy7NjF1LbVwQmKa4U7s7QnGvV5S7z4rHRjbi3sPVxSIiI_xEpWYmQztZG-B-vi1Yhv-F6Es7f";
const AVATAR_2 =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCbOAMJuAfq11rlnQ5H5_mrffpxGSKI74A6NGEpWaKJsTANw1qxq--z241Zaak54ZxnH6mK3ezE_zjsfA603ZrEGbQu9m3lZGDACk0y8ibyrT0NvyLap920IXsJRhqs8v-OWUaXRouBKQMcr9tmP-20R7bz0UKOt8CT0oHYIKyqlx_FJVtqemAfPF1NBUhaZbyCuwzmrEFmWlhLsPfqdR1UUbXc13-xU5oN26yb7g1nTqSueFyQV02G";
const AVATAR_3 =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtS_xiZ2Wb4PaKTr4buoQDo7LSf6vMGf4CWLYt1gjqFE1bi0bdzFjv-KXLrKObZ-uVlvZbEnKkJ-m5IqICJtFuW2hWDGgx_ef911f299SHFjN-fHEJsEjv31RsUwNBECJG8mhxWFJohwy_cbe9a1DGBT_2dMYEG8-CzRIebSzyJBVPV8nIhTfz8BhVn4QJmTbRdhuWklbx4Dy6bYV3m7FL6WtQEJ23V3_lNKAIigdgqTi2R1jHTNPb";
const AVATAR_4 =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAg_v2b58ETVe5IRV_dBITscajt1yUA1NwlVPt5FzaPS2g9GRpfrPV8QJc7ZlFNtCrM4kGZ1AUH-_XVN1sBQUsuatwOcEwrc7O9zzVnA_pOGve7QxvAmr4sB3EPRsDZW3vgJC9Yb-vrGq-XXcwxXuVdOHVtVeIfjg0QvuMvVv0_SLz_KcMm4bqsrHZT-SqSUPzXLKI0saqoRGxyBGIZE72Cr5_eEWdJ9hMe8RFlo9Qwc8ORk_r-Z0E8";
const AVATAR_PROFILE =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1bAI5kHL0pNsIkB_yCctC0w2w7ICKaifTMoT0Rz72qGV9cREzhx0NcuW_X8pL7Rz58fhWdue45dx5T2Jvi3fs_fvj0X8WPPuDxZqs4HEp20u4Qr9DYsnqaykNJYubBJ3SIr8CgQOQ3gnCf5fTU7_YC4iYKpWjMnwuXb8jprj61kklH0JeYS0nmGGf194Kd8d6P5Lj0qZ1p7qDuhFGGyeJXJif-8sZJRu5Y0MQqR8D9Y-2F9YgAFdv";

const INITIAL_TASKS = [
    {
        id: "t1",
        title: "Optimize Database Indexes",
        description:
            "Audit and refactor PostgreSQL indexes for the customer activity feed to reduce query latency by 30%.",
        priority: "High",
        category: "Engineering",
        pomodoros: 4,
        avatars: [AVATAR_1, AVATAR_2],
    },
    {
        id: "t2",
        title: "Design System Audit",
        description:
            "Ensure all typography tokens match the latest Figma spec across 4 core dashboards.",
        priority: "Medium",
        category: "Design",
        pomodoros: 2,
        avatars: [AVATAR_3],
    },
    {
        id: "t3",
        title: "Weekly Report Cleanup",
        description:
            "Archive old sprint reports and update the shared Notion database links.",
        priority: "Low",
        category: "Product",
        pomodoros: 1,
        avatars: [AVATAR_4],
    },
];

const PRIORITY_STYLE = {
    High: { cls: "badge-error", hover: "hoverBorderError" },
    Medium: { cls: "badge-primary", hover: "hoverBorderPrimary" },
    Low: { cls: "badge-neutral", hover: "hoverBorderNeutral" },
};

/* ------------------------------------------------------------------ */
/*  Calendar helpers  (July 2026 — 1st is a Wednesday)                  */
/* ------------------------------------------------------------------ */

function buildCalendarCells() {
    const cells = [];
    for (let i = 0; i < 2; i++) cells.push({ empty: true, key: `empty-${i}` });
    for (let day = 1; day <= 31; day++) {
        cells.push({
            empty: false,
            day,
            key: `day-${day}`,
            hasTask: day % 4 === 0,
            isToday: day === 15,
        });
    }
    return cells;
}

function buildHeatmap() {
    const opacities = [0.05, 0.2, 0.4, 0.6, 0.8, 1];
    return Array.from({ length: 28 }, () => opacities[Math.floor(Math.random() * opacities.length)]);
}

/* ------------------------------------------------------------------ */
/*  Styles                                                              */
/* ------------------------------------------------------------------ */

const CSS = `
.tfp {
  --sp-sm: 0.5rem;
  --sp-md: 1rem;
  --sp-lg: 1.5rem;
  --sp-xl: 2rem;

  --primary: #c0c1ff;
  --on-primary: #1a1a2e;
  --secondary: #8ecdff;
  --tertiary: #ffd166;
  --error: #ff6b6b;

  --background: #08080f;
  --surface-lowest: #050509;
  --surface-low: #101019;
  --surface-high: #1b1b29;

  --on-surface: #f2f2f7;
  --on-surface-variant: #a3a3b8;

  --white-mix: 255,255,255;

  background: var(--background);
  color: var(--on-surface);
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

.tfp[data-theme='light'] {
  --primary: #5b5df0;
  --on-primary: #ffffff;
  --secondary: #2b7cc9;
  --tertiary: #b8860b;
  --error: #e0433d;

  --background: #f4f4fb;
  --surface-lowest: #ffffff;
  --surface-low: #ececf6;
  --surface-high: #e1e1ef;

  --on-surface: #17171f;
  --on-surface-variant: #5c5c70;

  --white-mix: 0,0,0;
}

.tfp * { box-sizing: border-box; }

/* ---- layout utilities (custom spacing scale) ---- */
.p-sm{padding:var(--sp-sm)} .p-md{padding:var(--sp-md)} .p-lg{padding:var(--sp-lg)} .p-xl{padding:var(--sp-xl)}
.px-sm{padding-left:var(--sp-sm);padding-right:var(--sp-sm)}
.px-md{padding-left:var(--sp-md);padding-right:var(--sp-md)}
.px-lg{padding-left:var(--sp-lg);padding-right:var(--sp-lg)}
.px-xl{padding-left:var(--sp-xl);padding-right:var(--sp-xl)}
.py-sm{padding-top:var(--sp-sm);padding-bottom:var(--sp-sm)}
.py-md{padding-top:var(--sp-md);padding-bottom:var(--sp-md)}
.py-lg{padding-top:var(--sp-lg);padding-bottom:var(--sp-lg)}
.pt-lg{padding-top:var(--sp-lg)} .pt-md{padding-top:var(--sp-md)}
.pb-md{padding-bottom:var(--sp-md)}
.mt-xl{margin-top:var(--sp-xl)} .mt-lg{margin-top:var(--sp-lg)} .mt-md{margin-top:var(--sp-md)}
.mb-xl{margin-bottom:var(--sp-xl)} .mb-lg{margin-bottom:var(--sp-lg)} .mb-md{margin-bottom:var(--sp-md)} .mb-sm{margin-bottom:var(--sp-sm)}
.gap-sm{gap:var(--sp-sm)} .gap-md{gap:var(--sp-md)} .gap-lg{gap:var(--sp-lg)} .gap-xl{gap:var(--sp-xl)}
.space-y-sm>*+*{margin-top:var(--sp-sm)}
.space-y-md>*+*{margin-top:var(--sp-md)}
.space-y-lg>*+*{margin-top:var(--sp-lg)}
.space-y-xl>*+*{margin-top:var(--sp-xl)}

/* ---- typography scale ---- */
.text-display-lg{font-size:2.5rem;font-weight:800;line-height:1.1;letter-spacing:-0.02em}
.text-headline-md{font-size:1.75rem;font-weight:800;line-height:1.2;letter-spacing:-0.01em}
.text-title-sm{font-size:1.05rem;font-weight:700;line-height:1.3}
.text-body-base{font-size:0.95rem;line-height:1.5}
.text-body-sm{font-size:0.825rem;line-height:1.45}
.text-label-caps{font-size:0.7rem;font-weight:700;letter-spacing:0.12em}

/* ---- surfaces & colors ---- */
.bg-background{background:var(--background)}
.bg-surface-low{background:var(--surface-low)}
.bg-surface-high{background:var(--surface-high)}
.bg-surface-lowest{background:var(--surface-lowest)}
.text-on-surface{color:var(--on-surface)}
.text-on-surface-variant{color:var(--on-surface-variant)}
.text-on-surface-variant-60{color:var(--on-surface-variant);opacity:.6}
.text-on-surface-variant-40{color:var(--on-surface-variant);opacity:.4}

.text-primary{color:var(--primary)}
.bg-primary{background:var(--primary)}
.text-on-primary{color:var(--on-primary)}
.border-primary{border-color:var(--primary)}
.bg-primary-10{background:color-mix(in srgb, var(--primary) 10%, transparent)}
.bg-primary-20{background:color-mix(in srgb, var(--primary) 20%, transparent)}
.border-primary-20{border-color:color-mix(in srgb, var(--primary) 20%, transparent)}
.border-primary-30{border-color:color-mix(in srgb, var(--primary) 30%, transparent)}
.shadow-primary-20{box-shadow:0 12px 28px -8px color-mix(in srgb, var(--primary) 25%, transparent)}
.ring-primary-30:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb, var(--primary) 30%, transparent)}
.ring-primary-50:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb, var(--primary) 50%, transparent)}

.text-secondary{color:var(--secondary)}
.bg-secondary{background:var(--secondary)}
.bg-secondary-10{background:color-mix(in srgb, var(--secondary) 10%, transparent)}
.border-secondary-30{border-color:color-mix(in srgb, var(--secondary) 30%, transparent)}

.text-tertiary{color:var(--tertiary)}
.bg-tertiary{background:var(--tertiary)}
.bg-tertiary-10{background:color-mix(in srgb, var(--tertiary) 10%, transparent)}
.border-tertiary-20{border-color:color-mix(in srgb, var(--tertiary) 20%, transparent)}
.border-tertiary-30{border-color:color-mix(in srgb, var(--tertiary) 30%, transparent)}

.text-error{color:var(--error)}
.bg-error{background:var(--error)}
.bg-error-10{background:color-mix(in srgb, var(--error) 10%, transparent)}
.bg-error-20{background:color-mix(in srgb, var(--error) 20%, transparent)}
.border-error-20{border-color:color-mix(in srgb, var(--error) 20%, transparent)}
.border-error-30{border-color:color-mix(in srgb, var(--error) 30%, transparent)}

.bg-neutral-10{background:color-mix(in srgb, var(--on-surface-variant) 12%, transparent)}
.text-neutral{color:var(--on-surface-variant)}

.border-white-5{border-color:rgba(var(--white-mix),0.06)}
.border-white-10{border-color:rgba(var(--white-mix),0.1)}
.bg-white-3{background:rgba(var(--white-mix),0.03)}
.bg-white-5{background:rgba(var(--white-mix),0.05)}
.bg-white-1{background:rgba(var(--white-mix),0.015)}

.hoverable-row:hover{background:rgba(var(--white-mix),0.05)}
.hoverable-icon:hover{background:rgba(var(--white-mix),0.08)}
.hoverable-icon-error:hover{background:color-mix(in srgb, var(--error) 12%, transparent);color:var(--error)}

/* ---- effects ---- */
.glass{
  background: rgba(var(--white-mix), 0.035);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(var(--white-mix), 0.07);
}
.primary-gradient{ background: linear-gradient(135deg, var(--primary), var(--secondary)); }

.card-hover{ transition: all .25s ease; }
.card-hover:hover{ transform: translateY(-2px) scale(1.01); }

.nav-link{
  display:flex; align-items:center; gap:var(--sp-md);
  color: var(--on-surface-variant);
  padding: var(--sp-md) var(--sp-lg);
  text-decoration:none;
  transition: all .2s ease;
  border-left: 2px solid transparent;
}
.nav-link:hover{ background: rgba(var(--white-mix),0.05); color: var(--on-surface); }
.nav-link.active{
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  color: var(--primary);
  border-left: 2px solid var(--primary);
}

.custom-scrollbar::-webkit-scrollbar{ width:6px; height:6px; }
.custom-scrollbar::-webkit-scrollbar-thumb{ background: rgba(var(--white-mix),0.15); border-radius:99px; }
.custom-scrollbar::-webkit-scrollbar-track{ background: transparent; }

@keyframes tfpFadeIn { from { opacity:0; transform: translateY(8px) scale(.98); } to { opacity:1; transform:none; } }
.animate-fadeIn{ animation: tfpFadeIn .2s ease-out; }

@keyframes tfpPulse { 0%,100%{opacity:1;} 50%{opacity:.35;} }
.animate-pulse{ animation: tfpPulse 2s ease-in-out infinite; }

.priority-badge{ padding: 2px 8px; border-radius:4px; font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:.08em; }

input, select, textarea{ color: var(--on-surface); font-family:inherit; }
input::placeholder, textarea::placeholder{ color: var(--on-surface-variant); opacity:.5; }
select option{ background: var(--surface-high); color: var(--on-surface); }

.toggle-track{ width:56px; height:32px; border-radius:99px; position:relative; padding:4px; display:flex; align-items:center; transition: background .2s ease; cursor:pointer; border:none; }
.toggle-knob{ width:24px; height:24px; border-radius:50%; transition: transform .2s ease; }

.scale-hover:hover{ transform: scale(1.02); }
.scale-active:active{ transform: scale(.98); }
`;

const initialState = {
    title: '',
    description: '',
    dueDate: '',
    location: '',
    status: 'inComplete',
    visibility: 'private',
    file: ''
}

export default function Hero() {

    const { user, userLogout } = useAuth();

    const [create, setCreate] = useState(initialState);

    const handleChange = e => setCreate((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const [editData, setEditData] = useState({});
    const [image, setImage] = useState(null);
    const [theme, setTheme] = useState("dark");
    const [activeTab, setActiveTab] = useState("dashboard");
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("All Categories");
    const [priorityFilter, setPriorityFilter] = useState("All Priorities");
    const [heatmap, setHeatmap] = useState(buildHeatmap);
    const calendarCells = buildCalendarCells();
    const [expandedCard, setExpandedCard] = useState(null);
    const [notifOn, setNotifOn] = useState(true);
    const [aiAssistOn, setAiAssistOn] = useState(false);
    const [hasNotif, setHasNotif] = useState(true);

    const [promptForm, setPromptForm] = useState({
        framework: "React + TypeScript",
        cssUtility: "Tailwind CSS",
        context: "",
    });
    const [generatedPrompt, setGeneratedPrompt] = useState(
        "-- AI Prompt Spec will appear here --"
    );
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (activeTab === "analytics") setHeatmap(buildHeatmap());
    }, [activeTab]);

    const handleCreateTask = async (e) => {
        e.preventDefault();

        try {

            const token = localStorage.getItem('token');

            if (!create.title || !create.description || !create.dueDate) {
                return toast.error("Please fill out all required fields.");
            };

            const formData = new FormData();
            formData.append('title', create.title);
            formData.append('description', create.description);
            formData.append('location', create.location);
            formData.append('status', create.status);
            formData.append('dueDate', create.dueDate);
            formData.append('visibility', create.visibility);
            if (create.file) {
                formData.append('file', create.file)
            }

            const response = await axios.post('http://localhost:8000/todo/createTodo', formData, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const { isError, data } = response.data;

            if (isError) {
                return toast.error(data);
            };

            if (data) {
                toast.success("Task created successfully");
                setModalOpen(false);
                setCreate(initialState);
                setTasks((prev) => [...prev, data]);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);
        }
        // setActiveTab("tasks");
    };

    const fetchTasts = async () => {
        try {

            const token = localStorage.getItem('token');

            const response = await axios.get('http://localhost:8000/todo/getTodos', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const { isError, data } = response.data;

            if (isError) {
                return toast.error(data);
            };

            if (data) {
                setTasks(data);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {

            const token = localStorage.getItem('token');

            const response = await axios.delete(`http://localhost:8000/todo/deleteTodo/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const { isError, data, message, success } = response.data;

            if (isError) {
                return toast.error(message);
            };

            if (data) {
                setTasks((prev) => prev.filter((t) => t.id !== id));
                toast.success(message);
                return
            };

            return { success: true };

        } catch (error) {

        }
    }

    const showEditTask = async (data) => {
        setEditData(data);
        setEditModalOpen(true);
    };

    const handleEditChange = (e) => setEditData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleEditedTask = async (e) => {
        e.preventDefault();
        try {

            const token = localStorage.getItem('token');
            const oldId = editData.id;

            const response = await axios.patch(`http://localhost:8000/todo/updateTodo/${oldId}`, editData, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const { isError, data, message } = response.data;

            if (isError) {
                return toast.error(message);
            };

            if (data) {
                setTasks((prev) => prev.map((t) => t.id === oldId ? data : t));
                toast.success(message);
                setEditData({});
                setEditModalOpen(false);
            };

            return { success: true };
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error);
        }
    };


    useEffect(() => {
        fetchTasts()
    }, []);

    const filteredTasks = tasks.filter((t) => {
        const catOk = categoryFilter === "All Categories" || t.category === categoryFilter;
        const prioOk = priorityFilter === "All Priorities" || t.priority === priorityFilter;
        return catOk && prioOk;
    });

    const handleGeneratePrompt = () => {
        const spec = `// TaskFlow Pro — AI Architecture Spec
Framework: ${promptForm.framework}
Styling: ${promptForm.cssUtility}

Goal:
${promptForm.context.trim() || "Describe the feature you want the AI to architect."}

Deliverables:
- Component structure following ${promptForm.framework} conventions
- Styling implemented with ${promptForm.cssUtility}
- Responsive layout, accessible markup, keyboard focus states
- State handled locally unless a store is explicitly required`;
        setGeneratedPrompt(spec);
        setCopied(false);
    };

    const handleCopyPrompt = async () => {
        try {
            await navigator.clipboard.writeText(generatedPrompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (_) {
            setCopied(false);
        }
    };

    const priorityBadgeClass = (priority) =>
        priority === "High" ? "bg-error-10 text-error" : priority === "Medium" ? "bg-primary-10 text-primary" : "bg-neutral-10 text-neutral";

    const cardBorderHoverClass = (priority) =>
        priority === "High" ? "hoverBorderError" : priority === "Medium" ? "hoverBorderPrimary" : "hoverBorderNeutral";

    return (
        <div className="tfp" data-theme={theme}>
            <style>{CSS}</style>

            {/* ---------------- SIDEBAR ---------------- */}
            <aside
                className="custom-scrollbar"
                style={{
                    position: "fixed", left: 0, top: 0, bottom: 0, width: 280,
                    background: "var(--surface-low)", borderRight: "1px solid rgba(var(--white-mix),0.06)",
                    display: "flex", flexDirection: "column", height: "100%",
                    paddingTop: "1.5rem", paddingBottom: "1.5rem", zIndex: 50, overflowY: "auto",
                }}
            >
                <div className="px-lg mb-xl" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                        className="primary-gradient"
                        style={{ width: 40, height: 40, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--on-primary)", flexShrink: 0 }}
                    >
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <div>
                        <h1 className="text-title-sm text-on-surface" style={{ fontWeight: 900, lineHeight: 1.1 }}>TaskFlow Pro</h1>
                        <p className="text-body-sm text-on-surface-variant-60">Elite Workspace</p>
                    </div>
                </div>

                <button
                    className="primary-gradient scale-hover scale-active"
                    style={{ margin: "0 1.5rem 2rem", padding: "0.85rem 1.5rem", borderRadius: 14, color: "var(--on-primary)", fontWeight: 700, border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", cursor: "pointer", boxShadow: "0 10px 24px -8px color-mix(in srgb, var(--primary) 35%, transparent)" }}
                    onClick={() => setModalOpen(true)}
                >
                    <Plus size={18} /> New Task
                </button>

                <nav style={{ flex: 1, overflowY: "auto" }}>
                    <div>
                        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                            <a
                                key={id}
                                href="#"
                                className={`nav-link${activeTab === id ? " active" : ""}`}
                                onClick={(e) => { e.preventDefault(); setActiveTab(id); }}
                            >
                                <Icon size={20} />
                                <span className="text-body-sm">{label}</span>
                            </a>
                        ))}
                    </div>
                </nav>

                <div className="px-lg pt-lg" style={{ marginTop: "auto", borderTop: "1px solid rgba(var(--white-mix),0.06)" }}>
                    <a href="#" className="text-on-surface-variant" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0", textDecoration: "none" }} onClick={(e) => e.preventDefault()}>
                        <HelpCircle size={20} /> <span className="text-body-sm">Help</span>
                    </a>
                    <p className="text-on-surface-variant cursor-pointer" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0", textDecoration: "none" }} onClick={() => userLogout()}>
                        <LogOut size={20} /> <span className="text-body-sm">Sign Out</span>
                    </p>
                </div>
            </aside>

            {/* ---------------- TOP NAVBAR ---------------- */}
            <header
                style={{
                    position: "fixed", top: 0, right: 0, left: 280, zIndex: 40,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "0 1.5rem", height: 80, background: "#fffff",
                    backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(var(--white-mix),0.08)",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: 1 }}>
                    <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
                        <Search size={18} className="text-on-surface-variant-40" style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }} />
                        <input
                            className="bg-surface-high ring-primary-50"
                            style={{ width: "100%", border: "none", borderRadius: 14, paddingLeft: 44, paddingRight: 16, paddingTop: 10, paddingBottom: 10, fontSize: "0.875rem" }}
                            placeholder="Search tasks, documents, or team..."
                            type="text"
                        />
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <button
                        className="hoverable-icon"
                        style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14, border: "none", background: "transparent", cursor: "pointer", position: "relative" }}
                        onClick={() => setHasNotif(false)}
                    >
                        <Bell size={20} className="text-on-surface-variant" />
                        {hasNotif && (
                            <span className="bg-tertiary" style={{ position: "absolute", top: 10, right: 10, width: 8, height: 8, borderRadius: "50%" }} />
                        )}
                    </button>
                    <button
                        className="hoverable-icon"
                        style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14, border: "none", background: "transparent", cursor: "pointer" }}
                        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                    >
                        {theme === "dark" ? <Sun size={20} className="text-on-surface-variant" /> : <Moon size={20} className="text-on-surface-variant" />}
                    </button>
                    <div style={{ height: 32, width: 1, background: "rgba(var(--white-mix),0.1)", margin: "0 8px" }} />
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{ textAlign: "right" }}>
                            <p className="text-on-surface" style={{ fontWeight: 700, fontSize: "0.875rem", lineHeight: 1 }}>{user.fullName}</p>
                            <p className="text-on-surface-variant-60" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 4 }}>{user.role}</p>
                        </div>
                        <div style={{ width: 40, height: 40, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(var(--white-mix),0.1)" }}>
                            <img src={AVATAR_PROFILE} alt="Alex Rivera" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </header>

            {/* ---------------- MAIN CONTENT ---------------- */}
            <main className="custom-scrollbar" style={{ marginLeft: 280, marginTop: 80, padding: "1.5rem", height: "calc(100vh - 80px)", overflowY: "auto" }}>
                {activeTab === "dashboard" && <Dashboard tasks={tasks} setActiveTab={setActiveTab} />}
                {activeTab === "tasks" && (
                    <TasksView
                        tasks={filteredTasks}
                        categoryFilter={categoryFilter}
                        priorityFilter={priorityFilter}
                        setCategoryFilter={setCategoryFilter}
                        setPriorityFilter={setPriorityFilter}
                        onEdit={showEditTask}
                        onDelete={handleDeleteTodo}
                        onExpand={setExpandedCard}
                        priorityBadgeClass={priorityBadgeClass}
                        expandedCard={expandedCard}
                        statusIcon={statusIcon}
                    />
                )}
                {activeTab === "analytics" && <Analytics heatmap={heatmap} />}
                {activeTab === "calendar" && <CalendarView cells={calendarCells} />}
                {activeTab === "ai-prompt" && (
                    <AiPromptView
                        form={promptForm}
                        setForm={setPromptForm}
                        generated={generatedPrompt}
                        onGenerate={handleGeneratePrompt}
                        onCopy={handleCopyPrompt}
                        copied={copied}
                    />
                )}
                {activeTab === "settings" && (
                    <SettingsView
                        theme={theme}
                        setTheme={setTheme}
                        notifOn={notifOn}
                        setNotifOn={setNotifOn}
                        aiAssistOn={aiAssistOn}
                        setAiAssistOn={setAiAssistOn}
                        onReset={() => {
                            setTasks(INITIAL_TASKS);
                            setCategoryFilter("All Categories");
                            setPriorityFilter("All Priorities");
                        }}
                    />
                )}
            </main>

            {/* ---------------- NEW TASK MODAL ---------------- */}
            {modalOpen && (
                <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
                    <div
                        style={{ position: "absolute", inset: 0, background: "rgba(8,8,15,0.6)", backdropFilter: "blur(6px)" }}
                        onClick={() => setModalOpen(false)}
                    />
                    <div className="glass animate-fadeIn" style={{ width: "100%", maxWidth: 520, borderRadius: 28, padding: "2rem", position: "relative", zIndex: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                            <h2 className="text-headline-md text-on-surface">New Task</h2>
                            <button className="hoverable-icon" style={{ padding: 8, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", color: "var(--on-surface)" }} onClick={() => setModalOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <form className="space-y-lg" onSubmit={handleCreateTask}>
                            <div className="space-y-sm">
                                <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>
                                    Task Image
                                </label>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <div
                                        className="bg-surface-high border-white-5"
                                        style={{
                                            width: 64, height: 64, borderRadius: "50%", overflow: "hidden",
                                            border: "1px solid", display: "flex", alignItems: "center",
                                            justifyContent: "center", flexShrink: 0,
                                        }}
                                    >
                                        {create.file ? (
                                            <img src={create.file} alt="Task preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        ) : (
                                            <ImagePlus size={22} className="text-on-surface-variant" />
                                        )}
                                    </div>

                                    <label
                                        className="bg-surface-high hoverable-icon"
                                        style={{
                                            padding: "0.6rem 1.25rem", borderRadius: 14, fontSize: "0.8rem",
                                            fontWeight: 700, cursor: "pointer", color: "var(--on-surface)",
                                        }}
                                    >
                                        {create.file ? "Change Image" : "Upload Image"}
                                        <input
                                            type="file"
                                            name="file"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (!file) return;
                                                const reader = new FileReader();
                                                reader.onload = () => setImage(reader.result);
                                                setCreate((prev) => ({ ...prev, file: file }));
                                                reader.readAsDataURL(file);
                                            }}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-sm">
                                <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Todo Title</label>
                                <input
                                    className="bg-surface-high ring-primary-30"
                                    style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                    placeholder="e.g. Architect Core Store"
                                    type="text"
                                    name="title"
                                    value={create.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-sm">
                                <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Todo Description</label>
                                <input
                                    className="bg-surface-high ring-primary-30"
                                    style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                    placeholder="e.g. Design a new logo"
                                    type="text"
                                    name="description"
                                    value={create.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                <div className="space-y-sm">
                                    <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Status</label>
                                    <select
                                        className="bg-surface-high ring-primary-30"
                                        style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                        name="status"
                                        value={create.status}
                                        onChange={handleChange}
                                    >
                                        <option value="inComplete">InComplete</option>
                                        <option value="progress">progress</option>
                                        <option value="complete">Complete</option>
                                    </select>
                                </div>
                                <div className="space-y-sm">
                                    <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Visibility</label>
                                    <select
                                        className="bg-surface-high ring-primary-30"
                                        style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                        name="visibility"
                                        value={create.visibility}
                                        onChange={handleChange}
                                    >
                                        <option value="private">Private</option>
                                        <option value="public">Public</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                <div className="space-y-sm">
                                    <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Due Date</label>
                                    <input
                                        className="bg-surface-high ring-primary-30"
                                        style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                        type="date"
                                        name="dueDate"
                                        value={create.dueDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-sm">
                                    <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Location</label>
                                    <input
                                        className="bg-surface-high ring-primary-30"
                                        style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                        type="text"
                                        name="location"
                                        value={create.location}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="primary-gradient scale-active"
                                style={{ width: "100%", padding: "1rem", borderRadius: 18, color: "var(--on-primary)", fontWeight: 700, border: "none", cursor: "pointer", marginTop: "1rem", boxShadow: "0 16px 32px -10px color-mix(in srgb, var(--primary) 35%, transparent)" }}
                            >
                                Create Task
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* --------------- EDIT TASK MODAL ---------------- */}
            {editModalOpen && (
                <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
                    <div
                        style={{ position: "absolute", inset: 0, background: "rgba(8,8,15,0.6)", backdropFilter: "blur(6px)" }}
                        onClick={() => setEditModalOpen(false)}
                    />
                    <div className="glass animate-fadeIn" style={{ width: "100%", maxWidth: 520, borderRadius: 28, padding: "2rem", position: "relative", zIndex: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                            <h2 className="text-headline-md text-on-surface">Edit Task</h2>
                            <button className="hoverable-icon" style={{ padding: 8, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", color: "var(--on-surface)" }} onClick={() => setEditModalOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <form className="space-y-lg" onSubmit={handleEditedTask}>
                            <div className="space-y-sm">
                                <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>
                                    Task Image
                                </label>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <div
                                        className="bg-surface-high border-white-5"
                                        style={{
                                            width: 64, height: 64, borderRadius: "50%", overflow: "hidden",
                                            border: "1px solid", display: "flex", alignItems: "center",
                                            justifyContent: "center", flexShrink: 0,
                                        }}
                                    >
                                        {create.file ? (
                                            <img src={create.file} alt="Task preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        ) : (
                                            <ImagePlus size={22} className="text-on-surface-variant" />
                                        )}
                                    </div>

                                    <label
                                        className="bg-surface-high hoverable-icon"
                                        style={{
                                            padding: "0.6rem 1.25rem", borderRadius: 14, fontSize: "0.8rem",
                                            fontWeight: 700, cursor: "pointer", color: "var(--on-surface)",
                                        }}
                                    >
                                        {create.file ? "Change Image" : "Upload Image"}
                                        <input
                                            type="file"
                                            name="file"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (!file) return;
                                                const reader = new FileReader();
                                                reader.onload = () => setImage(reader.result);
                                                setEditData((prev) => ({ ...prev, file: file }));
                                                reader.readAsDataURL(file);
                                            }}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-sm">
                                <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Todo Title</label>
                                <input
                                    className="bg-surface-high ring-primary-30"
                                    style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                    placeholder="e.g. Architect Core Store"
                                    type="text"
                                    name="title"
                                    value={editData.title}
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="space-y-sm">
                                <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Todo Description</label>
                                <input
                                    className="bg-surface-high ring-primary-30"
                                    style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                    placeholder="e.g. Design a new logo"
                                    type="text"
                                    name="description"
                                    value={editData.description}
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                <div className="space-y-sm">
                                    <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Status</label>
                                    <select
                                        className="bg-surface-high ring-primary-30"
                                        style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                        name="status"
                                        value={editData.status}
                                        onChange={handleEditChange}
                                    >
                                        <option value="inComplete">InComplete</option>
                                        <option value="progress">progress</option>
                                        <option value="complete">Complete</option>
                                    </select>
                                </div>
                                <div className="space-y-sm">
                                    <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Visibility</label>
                                    <select
                                        className="bg-surface-high ring-primary-30"
                                        style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                        name="visibility"
                                        value={editData.visibility}
                                        onChange={handleEditChange}
                                    >
                                        <option value="private">Private</option>
                                        <option value="public">Public</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                <div className="space-y-sm">
                                    <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Due Date</label>
                                    <input
                                        className="bg-surface-high ring-primary-30"
                                        style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                        type="date"
                                        name="dueDate"
                                        value={editData.dueDate}
                                        onChange={handleEditChange}
                                    />
                                </div>
                                <div className="space-y-sm">
                                    <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Location</label>
                                    <input
                                        className="bg-surface-high ring-primary-30"
                                        style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.85rem 1.5rem" }}
                                        type="text"
                                        name="location"
                                        value={editData.location}
                                        onChange={handleEditChange}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="primary-gradient scale-active"
                                style={{ width: "100%", padding: "1rem", borderRadius: 18, color: "var(--on-primary)", fontWeight: 700, border: "none", cursor: "pointer", marginTop: "1rem", boxShadow: "0 16px 32px -10px color-mix(in srgb, var(--primary) 35%, transparent)" }}
                            >
                                Edit Task
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Dashboard tab                                                       */
/* ------------------------------------------------------------------ */

function Dashboard({ tasks, setActiveTab }) {
    const metrics = [
        { label: "Total Tasks", value: String(tasks.length).padStart(2, "0"), tag: "+12%", color: "primary", icon: ClipboardCheck },
        { label: "Pending", value: String(tasks.filter((t) => t.status === "progress").length).padStart(2, "0"), tag: "-5%", color: "tertiary", icon: Hourglass },
        { label: "Critical", value: String(tasks.filter((t) => t.status === "inComplete").length).padStart(2, "0"), tag: "Alert", color: "error", icon: AlertTriangle },
        { label: "Efficiency", value: "A+", tag: "98%", color: "secondary", icon: Zap },
    ];

    const criticalActions = [
        { title: "API Refactoring", meta: "Due today • Engineering", color: "error" },
        { title: "Q3 Design Review", meta: "In 2 days • Design", color: "primary" },
        { title: "User Feedback Sync", meta: "Next week • Product", color: "tertiary" },
    ];


    return (
        <section className="space-y-lg">
            <header className="mb-xl" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                    <h2 className="text-headline-md text-on-surface">System Overview</h2>
                    <p className="text-body-base text-on-surface-variant">
                        Welcome back. You have {tasks.filter((t) => t.status === "inComplete").length} high-priority items remaining for this sprint.
                    </p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <span className="bg-surface-high text-on-surface-variant" style={{ padding: "4px 12px", borderRadius: 999, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Live Status</span>
                    <div className="bg-primary-10 border-primary-20" style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 999, border: "1px solid" }}>
                        <span className="bg-primary animate-pulse" style={{ width: 8, height: 8, borderRadius: "50%" }} />
                        <span className="text-primary" style={{ fontSize: 11, fontWeight: 700 }}>SYNCED</span>
                    </div>
                </div>
            </header>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
                {metrics.map((m) => (
                    <div key={m.label} className={`glass p-lg card-hover`} style={{ borderRadius: 20 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                            <div className={`bg-${m.color}-10 text-${m.color}`} style={{ padding: 8, borderRadius: 10 }}>
                                <m.icon size={20} />
                            </div>
                            <span className={`text-${m.color}`} style={{ fontSize: 12, fontWeight: 700 }}>{m.tag}</span>
                        </div>
                        <p className="text-on-surface-variant text-body-sm">{m.label}</p>
                        <h3 className="text-display-lg mt-sm">{m.value}</h3>
                    </div>
                ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
                <div className="glass p-lg" style={{ borderRadius: 20, position: "relative", overflow: "hidden", height: 400 }}>
                    <div className="mb-lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 10 }}>
                        <h3 className="text-title-sm">Performance Velocity</h3>
                        <div style={{ display: "flex", gap: 8 }}>
                            <button className="bg-white-5" style={{ padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 700, border: "none", color: "var(--on-surface)", cursor: "pointer" }}>Week</button>
                            <button className="bg-primary-20 text-primary" style={{ padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 700, border: "none", cursor: "pointer" }}>Month</button>
                        </div>
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 256, padding: "1.5rem" }}>
                        <svg style={{ width: "100%", height: "100%", opacity: 0.85 }} preserveAspectRatio="none" viewBox="0 0 800 200">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,150 Q100,50 200,120 T400,80 T600,140 T800,60 L800,200 L0,200 Z" fill="url(#chartGradient)" />
                            <path d="M0,150 Q100,50 200,120 T400,80 T600,140 T800,60" fill="none" stroke="var(--primary)" strokeLinecap="round" strokeWidth="3" />
                        </svg>
                    </div>
                </div>

                <div className="glass p-lg" style={{ borderRadius: 20, display: "flex", flexDirection: "column" }}>
                    <h3 className="text-title-sm mb-lg">Critical Actions</h3>
                    <div className="custom-scrollbar space-y-md" style={{ flex: 1, overflowY: "auto", paddingRight: 8 }}>
                        {criticalActions.map((a) => (
                            <div key={a.title} className="bg-white-3 border-white-5 hoverable-row" style={{ padding: "1rem", borderRadius: 14, border: "1px solid", display: "flex", gap: "1rem", cursor: "pointer" }}>
                                <div className={`bg-${a.color}`} style={{ width: 4, borderRadius: 4, marginTop: 4, alignSelf: "stretch" }} />
                                <div>
                                    <h4 className="text-on-surface text-body-base" style={{ fontWeight: 700 }}>{a.title}</h4>
                                    <p className="text-on-surface-variant" style={{ fontSize: 12 }}>{a.meta}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="text-on-surface-variant mt-lg"
                        style={{ width: "100%", padding: "0.5rem 0", fontSize: "0.875rem", fontWeight: 700, background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                        onClick={() => setActiveTab("tasks")}
                    >
                        View all actions <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Tasks tab                                                           */
/* ------------------------------------------------------------------ */

const statusIcon = (status) => {
    switch (status) {
        case "inComplete":
            return <Clock size={14} className="text-on-surface-variant" />;
        case "progress":
            return <Loader2 size={14} className="text-primary" style={{ animation: "spin 1s linear infinite" }} />;
        case "complete":
            return <CheckCircle2 size={14} className="text-secondary" />;
        default:
            return <Circle size={14} className="text-on-surface-variant" />;
    }
};

function TasksView({ tasks, categoryFilter, statusIcon, expandedCard, onExpand, setExpandedCard, priorityFilter, setCategoryFilter, setPriorityFilter, onDelete, priorityBadgeClass, onEdit }) {
    return (
        <section className="space-y-lg">
            <div className="mb-lg" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between", alignItems: "center" }}>
                <h2 className="text-headline-md">Task Inventory</h2>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <select className="bg-surface-high" style={{ border: "none", borderRadius: 14, fontSize: "0.875rem", padding: "8px 24px" }} value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option>All Categories</option>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Product</option>
                    </select>
                    <select className="bg-surface-high" style={{ border: "none", borderRadius: 14, fontSize: "0.875rem", padding: "8px 24px" }} value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
                        <option>All Priorities</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                {tasks.length === 0 && (
                    <p className="text-on-surface-variant text-body-base">No tasks found. Please add a new task.</p>
                )}
                {tasks.map((t) => (
                    <div key={t.id} className="glass p-lg gap-5 card-hover" style={{ borderRadius: 20, display: "flex", flexDirection: "column", }} onClick={() => { console.log("clicked", t.id); onExpand(expandedCard === t.id ? null : t.id); console.log("expandedCard", expandedCard) }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <span className={`priority-badge ${priorityBadgeClass(t.priority)}`}>{t.visibility} Priority</span>
                            <div style={{ display: "flex", gap: 4 }}>
                                <button className="hoverable-icon" style={{ padding: 4, borderRadius: 6, border: "none", background: "transparent", color: "var(--on-surface)", cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); onEdit(t) }}>
                                    <Pencil size={16} />
                                </button>
                                <button className="hoverable-icon-error" style={{ padding: 4, borderRadius: 6, border: "none", background: "transparent", color: "var(--on-surface)", cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); onDelete(t.id) }}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                        <h3 className="text-title-sm" style={
                            expandedCard === t.id
                                ? {}
                                : {
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }
                        }>{t.title}</h3>
                        <p className="text-on-surface-variant text-body-sm"
                            style={
                                expandedCard === t.id
                                    ? {}
                                    : {
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }
                            }
                        >
                            {t.description}
                        </p>
                        <div className="mt-auto">
                            <div className="flex items-center gap-1 justify-start pb-4">
                                <span
                                    className="bg-secondary-10 text-secondary"
                                    style={{
                                        display: "flex", alignItems: "center", gap: 4,
                                        fontSize: 11, fontWeight: 700,
                                        padding: "4px 10px", borderRadius: 999,
                                    }}
                                >
                                    <MapPin size={12} /> {t.location}
                                </span>
                            </div>
                            <div className="pt-md border-white-5" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid", }}>
                                <div style={{ display: "flex" }}>
                                    {t.image?.url ? (
                                        <div
                                            className="bg-surface-high"
                                            style={{
                                                width: 38.5, height: 38.5, borderRadius: "50%",
                                                border: "2px solid var(--surface-low)", overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={t.image.url}
                                                alt=""
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    ) : (

                                        <div
                                            className="bg-surface-high"
                                            style={{
                                                width: 40, height: 40, borderRadius: "50%",
                                                border: "2px solid var(--surface-low)", overflow: "hidden",
                                            }}
                                        >
                                            <img src={[AVATAR_1, AVATAR_2, AVATAR_3, AVATAR_4][Math.floor(Math.random() * 4)]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </div>
                                    )}
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 20, alignItems: 'center' }}>
                                    <div className="flex items-center gap-1">
                                        {statusIcon(t.status)}
                                        <span className="text-on-surface-variant pb-1" style={{ fontSize: 12 }}>{t.status}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CalendarClock size={14} className="text-on-surface-variant" />
                                        <span className="text-on-surface-variant pb-1" style={{ fontSize: 12 }}>
                                            {t.dueDate
                                                ? new Date(t.dueDate).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })
                                                : "No due date"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Analytics tab                                                       */
/* ------------------------------------------------------------------ */

function Analytics({ heatmap }) {
    const categories = [
        { label: "Engineering", value: 92, color: "primary" },
        { label: "Design", value: 78, color: "tertiary" },
        { label: "Product", value: 64, color: "secondary" },
    ];

    return (
        <section className="space-y-lg">
            <h2 className="text-headline-md">Efficiency Metrics</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div className="glass p-lg" style={{ borderRadius: 20 }}>
                    <h3 className="text-title-sm mb-lg">Activity Heatmap</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
                        {heatmap.map((op, i) => (
                            <div key={i} style={{ aspectRatio: "1 / 1", borderRadius: 4, background: `rgba(192,193,255,${op})`, transition: "transform .15s ease" }} className="scale-hover" />
                        ))}
                    </div>
                    <div className="mt-md text-on-surface-variant" style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontWeight: 700, textTransform: "uppercase" }}>
                        <span>Less Active</span>
                        <div style={{ display: "flex", gap: 4 }}>
                            <div className="bg-white-5" style={{ width: 8, height: 8, borderRadius: 2 }} />
                            <div className="bg-primary-20" style={{ width: 8, height: 8, borderRadius: 2 }} />
                            <div style={{ width: 8, height: 8, borderRadius: 2, background: "color-mix(in srgb, var(--primary) 60%, transparent)" }} />
                            <div className="bg-primary" style={{ width: 8, height: 8, borderRadius: 2 }} />
                        </div>
                        <span>High Output</span>
                    </div>
                </div>

                <div className="glass p-lg" style={{ borderRadius: 20, display: "flex", flexDirection: "column" }}>
                    <h3 className="text-title-sm mb-lg">Category Performance</h3>
                    <div className="space-y-lg" style={{ flex: 1 }}>
                        {categories.map((c) => (
                            <div key={c.label}>
                                <div className="mb-sm" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span className="text-on-surface text-body-sm">{c.label}</span>
                                    <span className={`text-${c.color}`} style={{ fontWeight: 700, fontSize: "0.875rem" }}>{c.value}%</span>
                                </div>
                                <div className="bg-white-5" style={{ height: 8, width: "100%", borderRadius: 999, overflow: "hidden" }}>
                                    <div className={`bg-${c.color}`} style={{ height: "100%", width: `${c.value}%`, transition: "width .4s ease" }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Calendar tab                                                        */
/* ------------------------------------------------------------------ */

function CalendarView({ cells }) {
    return (
        <section className="space-y-lg">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 className="text-headline-md">July 2026</h2>
                <div style={{ display: "flex", gap: 8 }}>
                    <button className="glass hoverable-row" style={{ padding: 8, borderRadius: 10, border: "none", cursor: "pointer", color: "var(--on-surface)" }}>
                        <ChevronLeft size={20} />
                    </button>
                    <button className="glass hoverable-row" style={{ padding: 8, borderRadius: 10, border: "none", cursor: "pointer", color: "var(--on-surface)" }}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
            <div className="glass" style={{ borderRadius: 20, overflow: "hidden" }}>
                <div className="bg-white-5 border-white-5" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", borderBottom: "1px solid" }}>
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                        <div key={d} className="text-on-surface-variant" style={{ padding: "0.75rem 0", textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>{d}</div>
                    ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                    {cells.map((cell) =>
                        cell.empty ? (
                            <div key={cell.key} className="bg-white-1 border-white-5" style={{ height: 128, borderBottom: "1px solid", borderRight: "1px solid" }} />
                        ) : (
                            <div key={cell.key} className="border-white-5 hoverable-row" style={{ height: 128, padding: 8, borderBottom: "1px solid", borderRight: "1px solid", cursor: "pointer" }}>
                                <span className={cell.isToday ? "text-primary" : "text-on-surface-variant-40"} style={{ fontSize: 12, fontWeight: 700 }}>{cell.day}</span>
                                {cell.hasTask && (
                                    <div className="bg-primary-20 border-primary-30" style={{ marginTop: 8, padding: 4, borderRadius: 4, border: "1px solid" }}>
                                        <p className="text-primary" style={{ fontSize: 9, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Sprint Sync</p>
                                    </div>
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  AI Prompt tab                                                       */
/* ------------------------------------------------------------------ */

function AiPromptView({ form, setForm, generated, onGenerate, onCopy, copied }) {
    return (
        <section className="space-y-lg">
            <h2 className="text-headline-md">AI Specification Generator</h2>
            <div className="glass p-lg" style={{ borderRadius: 20, maxWidth: 720 }}>
                <p className="text-on-surface-variant mb-xl">Generate high-fidelity architecture prompts based on your current workspace context.</p>
                <div className="space-y-lg">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                        <div className="space-y-sm">
                            <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Target Framework</label>
                            <select
                                className="bg-surface-high"
                                style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.75rem 1.5rem" }}
                                value={form.framework}
                                onChange={(e) => setForm((p) => ({ ...p, framework: e.target.value }))}
                            >
                                <option>React + TypeScript</option>
                                <option>Vue 3 + Vite</option>
                                <option>Next.js (App Router)</option>
                                <option>Angular 18</option>
                            </select>
                        </div>
                        <div className="space-y-sm">
                            <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>CSS Utility</label>
                            <select
                                className="bg-surface-high"
                                style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.75rem 1.5rem" }}
                                value={form.cssUtility}
                                onChange={(e) => setForm((p) => ({ ...p, cssUtility: e.target.value }))}
                            >
                                <option>Tailwind CSS</option>
                                <option>Styled Components</option>
                                <option>CSS Modules</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-sm">
                        <label className="text-label-caps text-on-surface-variant" style={{ textTransform: "uppercase" }}>Context / Goal</label>
                        <textarea
                            className="bg-surface-high"
                            style={{ width: "100%", border: "none", borderRadius: 14, padding: "0.75rem 1.5rem", resize: "vertical" }}
                            placeholder="Describe the feature you want the AI to architect..."
                            rows={4}
                            value={form.context}
                            onChange={(e) => setForm((p) => ({ ...p, context: e.target.value }))}
                        />
                    </div>
                    <div className="bg-surface-lowest border-white-5" style={{ padding: "1.5rem", borderRadius: 14, border: "1px solid", position: "relative" }}>
                        <pre className="text-primary" style={{ fontSize: 12, fontFamily: "monospace", whiteSpace: "pre-wrap", margin: 0 }}>{generated}</pre>
                        <button
                            className="bg-white-5 hoverable-icon"
                            style={{ position: "absolute", top: 16, right: 16, padding: 8, borderRadius: 10, border: "none", cursor: "pointer", color: "var(--on-surface)" }}
                            onClick={onCopy}
                            type="button"
                        >
                            <Copy size={16} />
                        </button>
                        {copied && <span className="text-primary" style={{ position: "absolute", bottom: 8, right: 16, fontSize: 11 }}>Copied!</span>}
                    </div>
                    <button
                        className="primary-gradient scale-active"
                        style={{ width: "100%", padding: "0.85rem", borderRadius: 14, color: "var(--on-primary)", fontWeight: 700, border: "none", cursor: "pointer" }}
                        onClick={onGenerate}
                        type="button"
                    >
                        Generate Elite Prompt
                    </button>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Settings tab                                                        */
/* ------------------------------------------------------------------ */

function Toggle({ on, onClick, activeColor = "var(--primary)" }) {
    return (
        <button
            className="toggle-track"
            style={{ background: on ? `color-mix(in srgb, ${activeColor} 20%, transparent)` : "var(--surface-high)", justifyContent: on ? "flex-end" : "flex-start" }}
            onClick={onClick}
            type="button"
        >
            <div className="toggle-knob" style={{ background: on ? activeColor : "color-mix(in srgb, var(--on-surface-variant) 40%, transparent)" }} />
        </button>
    );
}

function SettingsView({ theme, setTheme, notifOn, setNotifOn, aiAssistOn, setAiAssistOn, onReset }) {
    const row = (title, desc, control) => (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <h4 className="text-on-surface text-body-base" style={{ fontWeight: 700 }}>{title}</h4>
                <p className="text-on-surface-variant" style={{ fontSize: 12 }}>{desc}</p>
            </div>
            {control}
        </div>
    );

    return (
        <section className="space-y-lg">
            <h2 className="text-headline-md">Workspace Settings</h2>
            <div className="glass p-lg space-y-xl" style={{ borderRadius: 20, maxWidth: 560 }}>
                {row(
                    "Theme Mode",
                    "Switch between obsidian dark and arctic light",
                    <Toggle on={theme === "light"} onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
                )}
                {row(
                    "Real-time Notifications",
                    "Desktop and browser push alerts",
                    <Toggle on={notifOn} onClick={() => setNotifOn((v) => !v)} />
                )}
                {row(
                    "AI Assistance",
                    "Allow AI to suggest task priorities",
                    <Toggle on={aiAssistOn} onClick={() => setAiAssistOn((v) => !v)} />
                )}
                <hr style={{ border: "none", borderTop: "1px solid rgba(var(--white-mix),0.06)" }} />
                <button
                    className="bg-error-10 text-error border-error-20"
                    style={{ width: "100%", padding: "0.85rem", borderRadius: 14, fontWeight: 700, border: "1px solid", cursor: "pointer" }}
                    onClick={onReset}
                >
                    Reset Workspace Data
                </button>
            </div>
        </section>
    );
}