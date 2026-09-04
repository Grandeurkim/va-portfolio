import {
  Sparkles,
  Video,
  Globe,
  Workflow,
  Bot,
  BriefcaseBusiness,
  Headset,
  Ticket,
  Mail,
  KanbanSquare,
  CalendarDays,
  DollarSign,
  Database,
  Palette,
  MessageSquareText,
} from "lucide-react";

const tools = [
  { name: "Slack", icon: MessageSquareText },
  { name: "Zoom", icon: Video },
  { name: "Google Workspace", icon: Globe },
  { name: "Zapier", icon: Workflow },
  { name: "n8n", icon: Bot },
  { name: "Monday.com", icon: BriefcaseBusiness },
  { name: "HubSpot", icon: Headset },
  { name: "Zendesk", icon: Ticket },
  { name: "Freshdesk", icon: Mail },
  { name: "Trello", icon: KanbanSquare },
  { name: "Asana", icon: KanbanSquare },
  { name: "ClickUp", icon: BriefcaseBusiness },
  { name: "QuickBooks", icon: DollarSign },
  { name: "Calendly", icon: CalendarDays },
  { name: "Airtable", icon: Database },
  { name: "Canva", icon: Palette },
  { name: "ChatGPT", icon: Sparkles },
];

export default function ToolsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {tools.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <Icon className="h-6 w-6 text-accent" />
          <span className="text-sm font-medium text-gray-800">{name}</span>
        </div>
      ))}
    </div>
  );
}