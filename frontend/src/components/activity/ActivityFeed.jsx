import { Card, CardContent } from "../ui/card";
import { Shield, AlertTriangle, Search, User } from "lucide-react";

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "threat_detected",
      description: "New threat detected in network",
      timestamp: "2024-04-24T10:00:00",
      icon: AlertTriangle
    },
    {
      id: 2,
      type: "system_scan",
      description: "Completed system security scan",
      timestamp: "2024-04-24T09:30:00",
      icon: Search
    }
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => {
        const Icon = activity.icon;

        return (
          <Card key={activity.id}>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="rounded-full bg-[#e6f0f7] p-2">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.description}</p>
                <p className="text-sm text-[#717d8a]">
                  {new Date(activity.timestamp).toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}